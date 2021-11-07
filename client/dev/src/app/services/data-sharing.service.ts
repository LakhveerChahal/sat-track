import { Injectable } from '@angular/core';
import { SatelliteModel } from '../models/satellite.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  toggleSelectedSatellite: Subject<SatelliteModel> = new Subject<SatelliteModel>();
  readonly satellites: SatelliteModel[] = [];

  constructor() { }

  getToggleSelectedSatellite(): Subject<SatelliteModel> {
    return this.toggleSelectedSatellite;
  }

  setToggleSelectedSatellite(satellite: SatelliteModel): void {
    this.toggleSelectedSatellite.next(satellite);
  }

}
