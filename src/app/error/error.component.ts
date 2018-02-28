import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public code: string;
  public message: string;
  public details: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      switch(params['code']) {
        case "401":
          this.code = "HTTP 401: Unauthorized";
          this.message = "Sorry, permission denied";
          this.details = "You are not authorized to access the page.";
          break;
        default:
          this.code = "HTTP 404: Not found";
          this.message = "Sorry, this page isn't available";
          this.details = "The link you followed may be broken, or the page may have been removed.";
          break;
      }
    });
  }

}
