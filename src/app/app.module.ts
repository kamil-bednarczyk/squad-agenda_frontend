import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthService} from './service/auth.service';
import {HeaderComponent} from './header/header.component';
import {SessionService} from './service/session.service';
import {LeftMenuComponent} from './home/left-menu/left-menu.component';
import {HomeComponent} from './home/home.component';
import {TeamCreationComponent} from './home/team-creation/team-creation.component';
import {ProfileComponent} from './home/profile/profile.component';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: 'new-team', component: TeamCreationComponent, outlet: 'left-menu-content'}
    ]},
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
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
