import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (!fragment) {
        return;
      }
      let token: string = undefined;
      fragment.split("&").forEach(s => {
        let kv: string[] = s.split("=");
        if (kv.length == 2 && kv[0] == "access_token") {
          token = kv[1];
        }
      });
      if (token) {
        this.authenticationService.setToken(token);
      }
    });
  }

  public login() {
    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", environment.oauth2_endpoint);
    for (let p in environment.oAuth2) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", environment.oAuth2[p]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
  }

  public logout() {
    this.authenticationService.removeToken();
  }

}
