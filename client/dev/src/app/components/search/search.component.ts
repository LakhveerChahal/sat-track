import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject, empty } from 'rxjs';
import { SearchSatellite } from '@models/search-satellite-response.model';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { MapService } from '@services/map.service';
import { DataSharingService } from '@services/data-sharing.service';

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
  searchString: string;

  constructor(private mapService: MapService,
    private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.searchObs
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchValue: string) => {
          this.isSearching = true;
          if (searchValue) {
            this.searchResults = [];
            return this.mapService.getSatelliteByName(searchValue)
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

        this.searchResults = res;
        this.isSearching = false;
      }, () => { this.isSearching = false });
  }

  ngAfterViewInit(): void {
    this.searchEl.nativeElement.onkeyup = (ev: KeyboardEvent) => {
      this.searchString = this.searchEl.nativeElement.value;
      this.onSearchStringChange();
    }
  }

  onSearchStringChange(): void {
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
}
