import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Cesium from 'cesium';
import { Observable } from 'rxjs';

import { constants } from 'src/constants';
import { environment } from 'src/environments/environment';
import { TleResponseModel } from '../models/tle-response.model';


@Injectable({
  providedIn: 'root',
})
export class MapService {
  noradIds = [46384, 46383, 46382, 46381, 46380];
  
  constructor(private http: HttpClient) {
    Cesium.Ion.defaultAccessToken = constants.defaultAccessToken;
  }

  getTle(noradId: number): Observable<TleResponseModel> {
    return this.http.get<TleResponseModel>(
      environment.apiBaseUrl +
        'tle/' +
        noradId +
        '&apiKey=' +
        environment.apiKey
    );
  }
}
