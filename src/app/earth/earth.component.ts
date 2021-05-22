import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import * as Cesium from 'cesium';
import { getSatelliteInfo, getGroundTracks } from 'tle.js';
import { TleResponseModel } from '../models/tle-response.model';
import { SatelliteModel } from '../models/satellite.model';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.less']
})
export class EarthComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef;
  viewer: Cesium.Viewer;
  satellites: SatelliteModel[] = [];

  constructor(private mapService: MapService) {
    this.satellites.push(new SatelliteModel(25444, null, false, false));
    this.satellites.push(new SatelliteModel(44943, null, false, false));
    this.satellites.push(new SatelliteModel(47799, null, false, false));
    this.satellites.push(new SatelliteModel(45549, null, false, false));
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.viewer = this.renderEarth(this.mapContainer);
    this.satellites.forEach((satellite) => this.getAllSatData(satellite));

    setInterval(() => {
      this.refreshData();
    }, 3000);
  }

  refreshData(): void {
    this.satellites.forEach((satellite) => {
      if(satellite.isRendered && satellite.isOrbitRendered) {
        this.getAllSatData(satellite);
      }
    });
  }

  renderEarth(el: ElementRef): Cesium.Viewer {
    return new Cesium.Viewer(el.nativeElement);
  }

  getAllSatData(satellite: SatelliteModel): void {
    this.mapService.getTle(satellite.satId).subscribe((res: TleResponseModel) => {
      satellite.satName = res.info.satname;
      const satInfo = getSatelliteInfo(res.tle);
      const tle = res.info.satname + "\n" + (<string>res.tle);
      
      this.getAndPlotOrbit(tle, satInfo, satellite);
      this.renderSatellite(satInfo, satellite);
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

  renderSatellite(satInfo: any, satellite: SatelliteModel): void {
    Cesium.IonResource.fromAssetId(163159).then(
      (resource) => {
        const wasRemoved: boolean = this.viewer.entities.removeById(satellite.satId.toString());
        if(true) {
          const pointEntity = this.viewer.entities.add({
            description: 'A satellite',
            position: Cesium.Cartesian3.fromDegrees(
              satInfo.lng,
              satInfo.lat,
              satInfo.height * 1000
            ),
            model: {
              uri: resource,
            },
            id: satellite.satId.toString()
          });
          // this.viewer.trackedEntity = pointEntity;
          if (!satellite.isRendered) {
            this.viewer.flyTo(pointEntity);
          }

          satellite.isRendered = true;
        } else {
          const satEntity = this.viewer.entities.getById(satellite.satId.toString());
          
        }
      }
    );
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

}
