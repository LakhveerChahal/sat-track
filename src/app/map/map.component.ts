import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MapService } from '../services/map.service';
import * as Cesium from 'cesium';
import { getSatelliteInfo, getGroundTracks } from 'tle.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements AfterViewInit, OnInit {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef;
  viewer: Cesium.Viewer;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.viewer = this.mapService.renderEarth(this.mapContainer);
    this.showPoint();
  }

  showOrbit(latlngs: Cesium.Cartesian3[]) {
    console.log(latlngs);

    const en = this.viewer.entities.add({
      polyline: {
        positions: latlngs,
        width: 4,
        material: Cesium.Color.GREEN
      }
    });
    this.viewer.flyTo(en);
  }

  showPoint() {
    this.getCoordinates().subscribe((res: any) => {
      const LatLng = getSatelliteInfo(res.tle);
      const tle = res.info.satname + "\n" + (<string>res.tle);
      getGroundTracks({
        tle: tle,
        startTimeMS: 1502342329860,
        stepMS: 1000,
        isLngLatFormat: true,
      }).then((threeOrbitsArr: any[]) => {
        let currentOrbit = threeOrbitsArr[1];
        for (let i = 0; i < currentOrbit.length; i++) {
          for (let j = 0; j < currentOrbit[i].length; j++) {
            console.log(currentOrbit[i][j]);
            // (<Array<number>>currentOrbit[i][j]).push(LatLng.height);
          }
        }
        console.log(currentOrbit);

        const coords = Cesium.Cartesian3.fromDegreesArrayHeights([...threeOrbitsArr[1][0], LatLng.height*1000]);
        this.showOrbit(coords);
      });

      const latlngs: Cesium.Cartesian3[] = [
        Cesium.Cartesian3.fromDegrees(LatLng.lng, LatLng.lat),
      ];

      const satModel = Cesium.IonResource.fromAssetId(163159).then(
        (resource) => {
          const pointEntity = this.viewer.entities.add({
            description: 'A random point',
            position: Cesium.Cartesian3.fromDegrees(
              LatLng.lng,
              LatLng.lat,
              LatLng.height * 1000
            ),
            model: {
              uri: resource,
            },
          });
          // this.viewer.trackedEntity = pointEntity;
        }
      );
    });
  }

  getCoordinates() {
    return this.mapService.getTle(25544);
  }
}
