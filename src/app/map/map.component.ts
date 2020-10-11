import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapService } from '../services/map.service';

import { Point } from '../models/point.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef;
  viewer: any;
  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.viewer = this.mapService.renderEarth(this.mapContainer);
    this.showPoint();
  }

  showPoint() {
    // const point: Point = {
    //   lat: 37.61864,
    //   lng: -122.38985,
    //   height: 10000
    // };
    // const satModel = Cesium.IonResource.fromAssetId(163159)
    //   .then((resource) => {
    //     const pointEntity = this.viewer.entities.add({
    //       description: 'A random point',
    //       position: Cesium.Cartesian3.fromDegrees(
    //         point.lng,
    //         point.lat,
    //         point.height
    //       ),
    //       model: {
    //         uri: resource,
    //         pixelSize: 1000
    //       }
    //     });
    //     this.viewer.trackedEntity = pointEntity;
    //   });
  }

  getTle() {
    this.mapService.getTle(25544).subscribe((res) => {
      console.log(res);
    });
  }
}
