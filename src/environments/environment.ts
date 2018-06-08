// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oauth2_endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  oAuth2: {
    client_id: "401780941892-q0b3qbn57tuu880opfd69uchdf0lpfeq.apps.googleusercontent.com",
    redirect_uri: "http://localhost:4200/login",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/spreadsheets.readonly",
    include_granted_scopes: "true",
    state: "login"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
