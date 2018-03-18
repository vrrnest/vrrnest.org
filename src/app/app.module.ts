import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core/typings/common-behaviors/common-module';

import { AuthenticationService } from './authentication.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { EventsComponent } from './events/events.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FireProtectionSystemComponent } from './documents/fire-protection-system/fire-protection-system.component';
import { GeneralBodyMeetingComponent } from './documents/general-body-meeting/general-body-meeting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagingCommitteeComponent } from './managing-committee/managing-committee.component';
import { RulesAndRegulationsComponent } from './documents/rules-and-regulations/rules-and-regulations.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { MaintenanceComponent } from './documents/maintenance/maintenance.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'VRR Nest Association',
      icon: 'home'
    }
  }, {
    path: 'documents/fire-protection-system',
    component: FireProtectionSystemComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Fire Protection System',
      icon: 'whatshot'
    }
  }, {
    path: 'documents/general-body-meeting',
    component: GeneralBodyMeetingComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'General Body Meeting',
      icon: 'group'
    }
  }, {
    path: 'documents/maintenance',
    component: MaintenanceComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Maintenance',
      icon: 'monetization_on'
    }
  }, {
    path: 'documents/rules-and-regulations',
    component: RulesAndRegulationsComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Rules and Regulations',
      icon: 'gavel'
    }
  }, {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Events calendar',
      icon: 'event'
    }
  }, {
    path: 'facilities',
    component: FacilitiesComponent,
    data: {
      title: 'Facilities in Nest',
      icon: 'pool'
    }
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      icon: 'lock'
    }
  }, {
    path: 'managing-committee',
    component: ManagingCommitteeComponent,
    data: {
      title: 'Managing Committee',
      icon: 'group_work'
    }
  }, {
    path: 'stuffs',
    component: StuffsComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Stuffs and Contractors',
      icon: 'directions_walk'
    }
  }, {
    path: 'error/:code',
    component: ErrorComponent,
    data: {
      title: 'ERROR',
      icon: 'warning'
    }
  }, {
    path: '**',
    redirectTo: '/error/404'
 }
];

@NgModule({
  declarations: [
    AppComponent,
    FireProtectionSystemComponent,
    ErrorComponent,
    EventsComponent,
    FacilitiesComponent,
    GeneralBodyMeetingComponent,
    HomeComponent,
    LoginComponent,
    MaintenanceComponent,
    ManagingCommitteeComponent,
    RulesAndRegulationsComponent,
    StuffsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
