import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthService} from './service/auth.service';
import {HeaderComponent} from './header/header.component';
import {SessionService} from './service/session.service';
import {LeftMenuComponent} from './home/left-menu/left-menu.component';
import {HomeComponent} from './home/home.component';
import {TeamCreationComponent} from './home/team-creation/team-creation.component';
import {ProfileComponent} from './home/profile/profile.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {EventsComponent} from './events/events.component';
import {CalendarModule} from 'angular-calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OptionListComponent } from './events/option-list/option-list.component';
import {TokenInterceptor} from './service/interceptor/token.interceptor';
import {EventService} from './service/event.service';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'events', component: EventsComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'new-team', component: TeamCreationComponent, outlet: 'left-menu-content'},
      {path: 'profile', component: ProfileComponent, outlet: 'left-menu-content'}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    LeftMenuComponent,
    HomeComponent,
    TeamCreationComponent,
    ProfileComponent,
    MyProfileComponent,
    EventsComponent,
    OptionListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, SessionService, EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {


}
