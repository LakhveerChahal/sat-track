import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import * as Cesium from 'cesium';
import { getSatelliteInfo, getGroundTracks, getEpochTimestamp } from 'tle.js';
import { MapService } from '@services/map.service';
import { TleResponseModel } from '@models/tle-response.model';
import { SatelliteModel } from '@models/satellite.model';
import { Subscription, timer, Subject } from 'rxjs';
import { DataSharingService } from '@services/data-sharing.service';
import { repeatWhen, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.less']
})
export class EarthComponent implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef;
  viewer: Cesium.Viewer;
  satellites: SatelliteModel[] = [];
  globalRefreshCounter: number = 0;
  satelliteAsset: any = null;

  stopTimer = new Subject<void>();
  refreshDataEvent = new Subject<void>();
  isTimerStopped = false;

  subscription = new Subscription();

  constructor(private mapService: MapService,
              private dataSharingService: DataSharingService) {
    this.satellites.push(new SatelliteModel(44943, null, false, false, null));
    this.satellites.push(new SatelliteModel(47799, null, false, false, null));
    // this.satellites.push(new SatelliteModel(45549, null, false, false, null));
    // this.satellites.push(new SatelliteModel(25444, null, false, false, null));
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.viewer = this.renderEarth(this.mapContainer);
    this.registerSubscriptions();
  }

  ngOnDestroy(): void {
    this.stopTimer.next();
    this.subscription.unsubscribe();
  }

  registerSubscriptions(): void {
    this.subscription.add(this.refreshDataEvent.subscribe(() => {
      this.refreshData();
    }));

    this.subscription.add(this.dataSharingService.getToggleSelectedSatellite()
    .subscribe((selectedSatellite: SatelliteModel) => {
      const findIndex: number = this.satellites.findIndex((satellite) => satellite.satId == selectedSatellite.satId);
      if(findIndex == -1) {
        this.satellites.push(selectedSatellite);
        this.stopTimer.next();
        this.isTimerStopped = true;
        this.refreshDataEvent.next();
      } else {
        this.satellites.splice(findIndex, 1);
        this.removeSatelliteAndOrbit(selectedSatellite);
      }
    }));

    this.startTimer();
  }

  startTimer(): void {
    this.isTimerStopped = false;
    this.subscription.add(
      timer(0, 3000)
      .pipe(takeUntil(this.stopTimer))
      .subscribe(() => {
        this.refreshDataEvent.next();
      })
    );
  }

  refreshData(): void {
    this.globalRefreshCounter++;
    this.satellites.forEach((satellite) => {
      if(this.needToUpdateTle(satellite)) {
        this.getAllSatData(satellite);
      }
      else {
        const satInfo = getSatelliteInfo(satellite.tleData);
        this.renderSatellite(satInfo, satellite, this.satelliteAsset);
        if(this.globalRefreshCounter > 180) {
          this.globalRefreshCounter = 0;
          this.getAndPlotOrbit(satellite.tleData, satInfo, satellite);
        }
      }
    });
  }

  needToUpdateTle(satellite: SatelliteModel): boolean {
    if(!satellite.tleData) {
      return true;
    }
    // check if 8 hours have passed since last update
    const lastUpdatedTime: number = getEpochTimestamp(satellite.tleData)
    let lastUpdated: Date = new Date(lastUpdatedTime + (8 * 60 * 60 * 1000));

    // return lastUpdated < new Date();
    return false;
  }

  renderEarth(el: ElementRef): Cesium.Viewer {
    return new Cesium.Viewer(el.nativeElement);
  }

  getAllSatData(satellite: SatelliteModel): void {
    this.mapService.getTle(satellite.satId).subscribe((res: TleResponseModel) => {
      satellite.satName = res.info.satname;
      const satInfo = getSatelliteInfo(res.tle);
      const tle = res.info.satname + "\n" + (<string>res.tle);

      satellite.tleData = tle;
      this.getAndPlotOrbit(tle, satInfo, satellite);
      if(this.satelliteAsset) {
        this.renderSatellite(satInfo, satellite, this.satelliteAsset);
      } else {
        this.getSatelliteAssetAndRender(satInfo, satellite);
      }
    });
  }

  getAndPlotOrbit(tle: string, satInfo: any, satellite: SatelliteModel): void {
    getGroundTracks({
      tle: tle,
      startTimeMS: Date.now(),
      stepMS: 30000,
      isLngLatFormat: true,
    }).then((threeOrbitsArr: any[]) => {
      let currentOrbit: number[][] = threeOrbitsArr[1];
      
      let latLngHeight: number[] = [];
      currentOrbit.forEach((latLng) => {
        latLngHeight.push(latLng[0], latLng[1], satInfo.height * 1000);
      });

      const coords = Cesium.Cartesian3.fromDegreesArrayHeights(latLngHeight);
      this.plotOrbit(coords, satellite);
    });
  }

  renderSatellite(satInfo: any, satellite: SatelliteModel, satelliteAsset: any): void {
    const entity: any = this.viewer.entities.getById(satellite.satId.toString());

    if (!entity) {
      this.viewer.entities.add({
        description: satellite.satName,
        position: Cesium.Cartesian3.fromDegrees(
          satInfo.lng,
          satInfo.lat,
          satInfo.height * 1000
        ),
        model: {
          uri: satelliteAsset,
        },
        id: satellite.satId.toString(),
        show: true,
        label: {
          text: satellite.satName,
          
        }
      });
    } else {
      entity.position = Cesium.Cartesian3.fromDegrees(
        satInfo.lng,
        satInfo.lat,
        satInfo.height * 1000
      );
    }
    satellite.isRendered = true;
    if(this.isTimerStopped) {
      this.startTimer();
    }
  }

  getSatelliteAssetAndRender(satInfo: any, satellite: SatelliteModel){
    Cesium.IonResource.fromAssetId(163159).then((resource) => {
      this.satelliteAsset = resource;
      this.renderSatellite(satInfo, satellite, this.satelliteAsset);
    });
  }

  plotOrbit(latlngs: Cesium.Cartesian3[], satellite: SatelliteModel): void {
    this.viewer.entities.removeById(satellite.satId.toString()+'orbit');
    const en = this.viewer.entities.add({
      polyline: {
        positions: latlngs,
        width: 4,
        material: Cesium.Color.GREEN
      },
      id: satellite.satId.toString() + 'orbit'
    });
    satellite.isOrbitRendered = true;
  }

  removeSatelliteAndOrbit(satellite: SatelliteModel): void {
    this.viewer.entities.removeById(satellite.satId.toString());
    this.viewer.entities.removeById(satellite.satId.toString() + 'orbit');
  }

}
