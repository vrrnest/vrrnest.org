// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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
