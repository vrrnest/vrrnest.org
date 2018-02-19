import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from './authentication.service';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = 'face';
  title = 'VRR Nest Association';

  constructor(private router: Router,
    private titleService: Title,
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    public authenticationService: AuthenticationService) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        let data = router.routerState.root.snapshot.firstChild.data;
        this.title = data['title'];
        this.icon = data['icon'];
        titleService.setTitle(data['title']);
      }
    });
    let svg: SafeResourceUrl = sanitizer.bypassSecurityTrustResourceUrl('/assets/company.svg');
    matIconRegistry.addSvgIconSetInNamespace('company', svg);
  }
}
