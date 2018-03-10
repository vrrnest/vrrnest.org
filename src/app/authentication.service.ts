import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User, auth } from 'firebase/app';

@Injectable()
export class AuthenticationService implements CanActivate {

  private redirectUrl: string = undefined;
  private token: string;
  public progress: boolean = false;
  public user: Observable<Object>;

  constructor(private router: Router, private http: HttpClient) {
    this.token = window.sessionStorage.getItem("token");
    if (this.token) {
      this.setToken(this.token);
    }
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return !!this.token;
  }

  public setToken(token: string): void {
    this.progress = true;
    this.http.get("https://sheets.googleapis.com/v4/spreadsheets/1nuvmHr_R1axyqiYg2W9WUq2NpUKbg893lxkCAY57Leo?access_token=" + token).subscribe(data => {
      window.sessionStorage.setItem("token", token);
      this.token = token;
      this.user = this.http.get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token);
      if (this.redirectUrl) {
        this.router.navigateByUrl(this.redirectUrl);
      } else {
        this.router.navigate(['/login']);
      }
  }, error => {
      // User is authenticated, but does not belong to vrrnest group.
      console.log(error);
      this.removeToken();
      this.router.navigate(['/error', error['status']]);
    }, () => this.progress = false);
  }

  public removeToken(): void {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('name', 'hiddenIframe');
    iframe.setAttribute('src', 'https://accounts.google.com/o/oauth2/revoke?token=' + this.token);
    document.body.appendChild(iframe);
    window.sessionStorage.removeItem("token");
    this.token = undefined;
    this.user = Observable.create(function(observer) {
      observer.next(null);
    });
  }
}
