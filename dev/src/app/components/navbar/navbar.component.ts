import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { debounceTime, switchMap, distinctUntilChanged } from "rxjs/operators";
import { MapService } from 'src/app/services/map.service';
import { SearchSatellite } from '@models/search-satellite-response.model';
import { Subject, empty } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchEl', { static: false }) searchEl: ElementRef<HTMLInputElement>;
  searchObs: Subject<string> = new Subject<string>();
  searchResults: SearchSatellite[] = [];

  constructor(private mapService: MapService) {
    // const dummyData = new SearchSatellite('Starlink', 'asada');
    // this.searchResults.push(dummyData);
    // this.searchResults.push(dummyData);
    // this.searchResults.push(dummyData);
  }

  ngOnInit(): void {
    this.searchObs
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchValue: string) => {
          if (searchValue) return this.mapService.getSatelliteByName(searchValue)

          return empty();
        })
      )
      .subscribe((res: { satellite: SearchSatellite[]}) => {
        console.log(res);
        this.searchResults = res.satellite;
      });
  }

  ngAfterViewInit(): void {
    this.searchEl.nativeElement.onkeyup = (ev: KeyboardEvent) => {
      this.searchObs.next(this.searchEl.nativeElement.value);
    }
  }

}
