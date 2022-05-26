// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotify: { // separate for need add other API
    urlBase: 'https://api.spotify.com/v1',
    urlAuth: 'https://accounts.spotify.com/authorize?',
    urlToken: 'https://accounts.spotify.com/api/token',
    stateKey: 'spotify_auth_state',
    scope: 'user-read-private user-read-email',
    state: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    client_id: '8ada78f5c0ac4b8cba5ba800bd366820',
    client_secret: 'f1f96391e09143248ca3b0c9137473c7',
    redirect_uri: 'http://localhost:4200/',
    grant_type: 'authorization_code',
    response_type: 'code',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
