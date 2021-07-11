import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlFormationService {
  private baseUrl: string = environment.apiBaseUrl;
  private apiKey: string = environment.apiKey;
  private dbBaseUrl: string = environment.hasura.hasuraBaseUrl;
  private dbHasuraKey: string = environment.hasura.hasuraSecretKey;

  constructor() { }

  getTleUrl(noradId: string): string {
    return `${this.baseUrl}tle/`+ noradId + `&apiKey=${this.apiKey}`;
  }

  getSatelliteByNameUrl(satname: string): string {
    return `${this.dbBaseUrl}satellite/${satname}`;
  }
}
