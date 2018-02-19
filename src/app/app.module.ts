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


import { AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { MatCommonModule } from '@angular/material/core/typings/common-behaviors/common-module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagingCommitteeComponent } from './managing-committee/managing-committee.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { EventsComponent } from './events/events.component';
import { GeneralBodyMeetingComponent } from './general-body-meeting/general-body-meeting.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'VRR Nest',
      icon: 'home'
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
    path: 'general-body-meeting',
    component: GeneralBodyMeetingComponent,
    data: {
      title: 'General Body Meeting',
      icon: 'group'
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
    path: 'rules-and-regulations',
    component: RulesAndRegulationsComponent,
    data: {
      title: 'Rules and Regulations',
      icon: 'gavel'
    }
  }, {
    path: 'stuffs',
    component: StuffsComponent,
    data: {
      title: 'Stuffs and Contractors',
      icon: 'directions_walk'
    }
  }, {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'HTTP 404: Not found',
      icon: 'warning'
    }
 }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ManagingCommitteeComponent,
    StuffsComponent,
    FacilitiesComponent,
    RulesAndRegulationsComponent,
    EventsComponent,
    GeneralBodyMeetingComponent,
    LoginComponent
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
