import { Component, OnInit, Input } from '@angular/core';
import { SearchSatellite } from '@models/search-satellite-response.model';
import { SatelliteModel } from '@models/satellite.model';
import { DataSharingService } from '@services/data-sharing.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less']
})
export class SearchResultComponent implements OnInit {
  @Input('searchResults') searchResults: SearchSatellite[] = [];
  @Input('isSearching') isSearching: boolean = false;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  toggleSatellite(satellite: SearchSatellite): void {
    const selectedSatellite: SatelliteModel = new SatelliteModel(+satellite.noradId, satellite.satelliteName, false, false, null);

    this.dataSharingService.setToggleSelectedSatellite(selectedSatellite);
  }

  loadMoreResults(): void {
    this.dataSharingService.setLoadMoreResults();
  }

}
