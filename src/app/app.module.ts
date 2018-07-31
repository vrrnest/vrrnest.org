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
import { MaintenanceComponent } from './documents/maintenance/maintenance.component';
import { ComplaintsComponent } from './complaints/complaints.component';


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
    data: {
      title: 'Maintenance',
      icon: 'monetization_on'
    }
  }, {
    path: 'documents/rules-and-regulations',
    component: RulesAndRegulationsComponent,
    data: {
      title: 'Rules and Regulations',
      icon: 'gavel'
    }
  }, {
    path: 'complaints',
    component: ComplaintsComponent,
    data: {
      title: 'Complaints',
      icon: 'report'
    }
  }, {
    path: 'events',
    component: EventsComponent,
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
    ComplaintsComponent,
    FireProtectionSystemComponent,
    ErrorComponent,
    EventsComponent,
    FacilitiesComponent,
    GeneralBodyMeetingComponent,
    HomeComponent,
    LoginComponent,
    MaintenanceComponent,
    ManagingCommitteeComponent,
    RulesAndRegulationsComponent
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
