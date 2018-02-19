import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase/app';

@Injectable()
export class AuthenticationService implements CanActivate {

  private redirectUrl: string = "/";
  public user: Observable<User>;
  public progress: boolean;
  public message: string;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigateByUrl('/login');
    return false;
  }

  public login(authProvider: auth.AuthProvider) {
    this.progress = true;
    this.message = null;
    this.angularFireAuth.auth.signInWithPopup(authProvider)
    .then(response => {
      this.progress = false;
      this.message = "login successful";
    }, reject => {
      this.progress = false;
      try {
        this.message  = JSON.parse(reject.message)["error"]["message"];
      } catch (e) {
        this.message = reject.message;
      }
      console.log(reject);
    });
  }

  public logout() {
    this.progress = true;
    this.angularFireAuth.auth.signOut().then(response => {
      this.progress = false;
      this.message = null;
    }, reject => {
      this.progress = false;
      try {
        this.message  = JSON.parse(reject.message)["error"]["message"];
      } catch (e) {
        this.message = reject.message;
      }
      console.log(reject);
    });
  }

  public continue() {
    this.router.navigateByUrl(this.redirectUrl);
  }
}
