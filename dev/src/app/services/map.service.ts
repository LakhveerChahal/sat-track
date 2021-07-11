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
  private hasuraSecretKey: string = environment.hasura.hasuraSecretKey;
  
  constructor(private http: HttpClient, private urlFormationService: UrlFormationService) {
    Cesium.Ion.defaultAccessToken = constants.defaultAccessToken;
  }

  getTle(noradId: number): Observable<TleResponseModel> {
    return this.http.get<TleResponseModel>(
      this.urlFormationService.getTleUrl(noradId.toString())
    );
  }

  getSatelliteByName(satname: string): Observable<{ satellite: SearchSatellite[]}> {
    let headers = new HttpHeaders();
    headers = headers.append('x-hasura-admin-secret', this.hasuraSecretKey);
    return this.http.get<{ satellite: SearchSatellite[]}>(this.urlFormationService.getSatelliteByNameUrl(satname + '%25'), {
      headers: headers
    });
  }
}
