import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlFormationService {
  private baseUrl: string = environment.apiBaseUrl;
  private apiKey: string = environment.apiKey;

  constructor() { }

  getTleUrl(noradId: string): string {
    return `${this.baseUrl}tle/`+ noradId + `&apiKey=${this.apiKey}`;
  }
}
