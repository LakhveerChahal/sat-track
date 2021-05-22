// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const apiBaseUrl = 'https://api.n2yo.com/rest/v1/satellite/';
const apiKey = 'YC9DQJ-37AG2W-N5G4NY-4KM3';

export const environment = {
  production: false,
  apiBaseUrl: apiBaseUrl,
  apiKey: apiKey
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
