import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, empty, Subscription } from 'rxjs';
import { SearchSatellite } from '@models/search-satellite-response.model';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { MapService } from '@services/map.service';
import { DataSharingService } from '@services/data-sharing.service';
import { constants } from 'src/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchEl', { static: false }) searchEl: ElementRef<HTMLInputElement>;
  searchObs: Subject<string> = new Subject<string>();
  searchResults: SearchSatellite[] = [];
  isSearching: boolean = false;
  showResultPanel: boolean = false;
  searchString: string;
  limit: number = constants.limit;
  offset: number = 0;
  subscription = new Subscription();

  constructor(private mapService: MapService,
    private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.subscription.add(this.searchObs
      .pipe(
        debounceTime(500),
        switchMap((searchValue: string) => {
          this.isSearching = true;
          if (searchValue) {
            return this.mapService.getSatelliteByName(searchValue, this.offset, this.limit)
          }

          return empty();
        }),
        map((res) => {
          res.forEach((satellite) => {
            const findIndex = this.dataSharingService.satellites.findIndex((s) => s.satId == +satellite.noradId);
            satellite.isRendered = findIndex != -1;
          });
          return res;
        })
      )
      .subscribe((res: SearchSatellite[] ) => {
        if(!res) { return; }

        this.searchResults = this.searchResults.concat(res);
        this.isSearching = false;
      }, () => { this.isSearching = false }));
  }

  ngAfterViewInit(): void {
    this.searchEl.nativeElement.onkeyup = (ev: KeyboardEvent) => {
      this.searchString = this.searchEl.nativeElement.value;
      this.searchResults = [];
      this.offset = 0;
      this.initiateSearch();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initiateSearch(): void {
    if (this.searchString) {
      this.showResultPanel = true;
    } else {
      this.showResultPanel = false;
    }
    this.searchObs.next(this.searchString);
  }

  clearSearch(): void {
    this.searchEl.nativeElement.value = '';
    const keyUpEvent = new KeyboardEvent('keyup');
    this.searchEl.nativeElement.dispatchEvent(keyUpEvent);
  }

  loadMoreResults(): void {
    this.offset += constants.offset;
    this.initiateSearch();
  }
}
