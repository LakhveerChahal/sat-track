import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Ion } from 'cesium';
import { constants } from './constants';

if (environment.production) {
  enableProdMode();
}

window['CESIUM_BASE_URL'] = "assets/Cesium";
Ion.defaultAccessToken = constants.defaultAccessToken;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
