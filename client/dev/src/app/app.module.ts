import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavbarComponent } from '@features/navbar/navbar.component';
import { EarthComponent } from "@features/earth/earth.component";
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingOverlayComponent } from './shared/loading-overlay/loading-overlay.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthComponent,
    NavbarComponent,
    SearchResultComponent,
    SearchComponent,
    LoadingOverlayComponent,
    LoaderComponent,
    UserComponent
  ],
  imports: [
    ReactiveFormsModule,
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
