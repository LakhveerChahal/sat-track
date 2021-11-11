import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Cesium from 'cesium';
import { Observable } from 'rxjs';

import { constants } from 'src/constants';
import { UrlFormationService } from './url-formation.service';
import { TleResponseModel } from '../models/tle-response.model';
import { SearchSatellite } from "../models/search-satellite-response.model";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient, private urlFormationService: UrlFormationService) {
    Cesium.Ion.defaultAccessToken = constants.defaultAccessToken;
  }

  getTle(noradId: number): Observable<TleResponseModel> {
    return this.http.get<TleResponseModel>(
      this.urlFormationService.getTleUrl(noradId.toString())
    );
  }

  getSatelliteByName(satname: string): Observable<SearchSatellite[]> {
    return this.http.get<SearchSatellite[]>(this.urlFormationService.getSatelliteByNameUrl(satname));
  }
}
