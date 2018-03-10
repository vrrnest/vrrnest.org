export const environment = {
  production: true,
  oauth2_endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  oAuth2: {
    client_id: "401780941892-q0b3qbn57tuu880opfd69uchdf0lpfeq.apps.googleusercontent.com",
    redirect_uri: "https://www.vrrnest.org/login",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/spreadsheets.readonly",
    include_granted_scopes: "true",
    state: "login"
  }
};
