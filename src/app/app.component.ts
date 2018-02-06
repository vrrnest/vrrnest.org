import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = 'face';
  title = 'VRR Nest Association';

  constructor(private router: Router, private titleService: Title) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        let data = router.routerState.root.snapshot.firstChild.data;
        this.title = data['title'];
        this.icon = data['icon'];
        titleService.setTitle(data['title']);
      }
    });
  }
}
