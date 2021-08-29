import { Component, OnInit, Input } from '@angular/core';
import { SearchSatellite } from '@models/search-satellite-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less']
})
export class SearchResultComponent implements OnInit {
  @Input('searchResults') searchResults: SearchSatellite[] = [];
  @Input('isSearching') isSearching: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
