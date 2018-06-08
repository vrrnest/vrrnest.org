import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationService implements CanActivate {

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
    if (this.token) {
      window.sessionStorage.removeItem("redirectUrl");
      return true;
    }
    window.sessionStorage.setItem("redirectUrl", state.url);
    this.router.navigate(['/login']);
    return false;
  }

  public setToken(token: string): void {
    this.progress = true;
    this.http.get("https://sheets.googleapis.com/v4/spreadsheets/1nuvmHr_R1axyqiYg2W9WUq2NpUKbg893lxkCAY57Leo?access_token=" + token).subscribe(data => {
      console.log(data);
      this.progress = false;
      window.sessionStorage.setItem("token", token);
      this.token = token;
      this.user = this.http.get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token);
      let redirectUrl: string = window.sessionStorage.getItem("redirectUrl");
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      } else {
        this.router.navigate(['/login']);
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
