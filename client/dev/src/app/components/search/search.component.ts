import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject, empty } from 'rxjs';
import { SearchSatellite } from '@models/search-satellite-response.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MapService } from '@services/map.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchEl', { static: false }) searchEl: ElementRef<HTMLInputElement>;
  searchObs: Subject<string> = new Subject<string>();
  searchResults: SearchSatellite[] = [];
  isSearching: boolean = false;
  showResultPanel: boolean = false;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.searchObs
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchValue: string) => {
          this.isSearching = true;
          if (searchValue) 
          return this.mapService.getSatelliteByName(searchValue)

          return empty();
        })
      )
      .subscribe((res: { satellite: SearchSatellite[] }) => {
        this.searchResults = res.satellite;
        this.isSearching = false;
      }, () => { this.isSearching = false });
  }

  ngAfterViewInit(): void {
    this.searchEl.nativeElement.onkeyup = (ev: KeyboardEvent) => {

      const searchString = this.searchEl.nativeElement.value;
      if(searchString) {
        this.showResultPanel = true;
        this.searchObs.next(searchString);
      } else {
        this.showResultPanel = false;
      }
    }
  }
}
