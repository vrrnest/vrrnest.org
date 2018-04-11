import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationService implements CanActivate {

  private token: string;
  public progress: boolean = false;
  public user: Observable<Object>;
  public redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) {
    this.token = window.sessionStorage.getItem("token");
    if (this.token) {
      this.setToken(this.token, this.redirectUrl);
    }
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (this.token) {
      return true;
    }

    this.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

  public setToken(token: string, redirectUrl: string): void {
    this.progress = true;
    this.http.get("https://sheets.googleapis.com/v4/spreadsheets/1nuvmHr_R1axyqiYg2W9WUq2NpUKbg893lxkCAY57Leo/values/Breakup!A:C?access_token=" + token).subscribe(data => {
      console.log(data);
      this.progress = false;
      window.sessionStorage.setItem("token", token);
      this.token = token;
      this.user = this.http.get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token);
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      }
  }, error => {
      // User is authenticated, but does not belong to vrrnest group.
      this.progress = false;
      console.log(error);
      this.removeToken();
      this.router.navigate(['/error', error['status']]);
    });
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
