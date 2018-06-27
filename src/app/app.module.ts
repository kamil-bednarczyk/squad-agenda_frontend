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
import {MyProfileComponent} from './my-profile/my-profile.component';
import {EventsComponent} from './events/events.component';
import {OptionListComponent} from './events/option-list/option-list.component';
import {TokenInterceptor} from './service/interceptor/token.interceptor';
import {EventService} from './service/event.service';
import {TeamComponent} from './team/team.component';
import {TeamService} from './service/team.service';
import {TeamElementComponent} from './team/team-element/team-element.component';
import { TeamBoardComponent } from './team-board/team-board.component';
import { BoardElementComponent } from './team-board/board-element/board-element.component';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'events', component: EventsComponent},
  {path: 'boards/:id', component: TeamBoardComponent},
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamComponent},
  {
    path: 'home', component: HomeComponent, children: []
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
    MyProfileComponent,
    EventsComponent,
    OptionListComponent,
    TeamComponent,
    TeamElementComponent,
    TeamBoardComponent,
    BoardElementComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, SessionService, EventService, TeamService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {


}
