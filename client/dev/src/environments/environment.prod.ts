// For n2yo API
const apiBaseUrl = 'https://api.n2yo.com/rest/v1/satellite/';
const apiKey = 'YC9DQJ-37AG2W-N5G4NY-4KM3';

// For hasura API
// const hasuraSecretKey = 'R6jbMtmywtXzMGapRCwHXvb4D919KZrSsq3jz7RERjCi6jXv4XPcqQVcEShIrxZT';
// const hasuraBaseUrl = 'https://satrack.hasura.app/api/rest/';

export const environment = {
  production: false,
  apiBaseUrl: apiBaseUrl,
  apiKey: apiKey,
  dbBaseUrl: 'localhost:3000/'
  // hasura: {
  //   hasuraBaseUrl: hasuraBaseUrl,
  //   hasuraSecretKey: hasuraSecretKey
  // }
};