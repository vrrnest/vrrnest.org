import { Component } from '@angular/core';
import { User, auth } from 'firebase/app';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authenticationService: AuthenticationService) {
  }

  loginGoogle() {
    let authProvider = new auth.GoogleAuthProvider();
    authProvider.addScope("https://www.googleapis.com/auth/spreadsheets.readonly");
    this.authenticationService.login(authProvider);
  }

}
