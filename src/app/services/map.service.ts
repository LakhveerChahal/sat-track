import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Cesium from 'cesium';

import { constants } from 'src/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  noradIds = [46384, 46383, 46382, 46381, 46380];
  
  constructor(private http: HttpClient) {
    Cesium.Ion.defaultAccessToken = constants.defaultAccessToken;
  }

  renderEarth(el: ElementRef) {
    const viewer = new Cesium.Viewer(el.nativeElement);

    return viewer;
  }

  getTle(noradId: number) {
    return this.http.get(
      environment.apiBaseUrl +
        'tle/' +
        noradId +
        '&apiKey=' +
        environment.apiKey
    );
  }
}
