export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDglsRZpvQKep6mmaqKyKPIOL6eJTidmcQ',
    authDomain: 'vrrnest-7d509.firebaseapp.com',
    databaseURL: 'https://vrrnest-7d509.firebaseio.com/',
    projectId: 'vrrnest-7d509',
    storageBucket: 'vrrnest-7d509.appspot.com',
    messagingSenderId: '401780941892'
  },
  oauth2_endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  oAuth2: {
    client_id: "401780941892-q0b3qbn57tuu880opfd69uchdf0lpfeq.apps.googleusercontent.com",
    redirect_uri: "https://www.vrrnest.org/login",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.email",
    include_granted_scopes: "true",
    state: "/login"
  }
};
