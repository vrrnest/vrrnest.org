import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core/typings/common-behaviors/common-module';

import { AuthenticationService } from './authentication.service';

import { AdminComponent } from './admin/admin.component';
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
      title: 'VRR Nest',
      icon: 'home'
    }
  }, {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Administration',
      icon: 'security'
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
    path: 'documents/fire-protection-system',
    component: FireProtectionSystemComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Fire Protection System',
      icon: 'whatshot'
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
    AdminComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
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
