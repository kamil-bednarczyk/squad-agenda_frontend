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
import {TeamsListComponent} from './team/teams-list.component';
import {TeamService} from './service/team.service';
import {TeamElementComponent} from './team/team-element/team-element.component';
import {TeamBoardComponent} from './team-board/team-board.component';
import {BoardElementComponent} from './team-board/board-element/board-element.component';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './service/modal.service';
import {DummyComponent} from './dummy/dummy.component';
import {TeamfilterPipe} from './pipe/teamfilter.pipe';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './service/alert.service';
import {CreateTeamComponent} from './team/create-team/create-team.component';
import {SeachUsersComponent} from './header/seach-users/seach-users.component';
import {MyTeamsComponent} from './team/my-teams/my-teams.component';
import {UserService} from './service/user.service';
import {RoosterComponent} from './rooster/rooster.component';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'events', component: EventsComponent},
  {path: 'dummy', component: DummyComponent},
  {path: 'boards/:id', component: TeamBoardComponent},
  {path: '', component: HomeComponent},
  {path: 'rooster', component: RoosterComponent},
  {path: 'teams', component: TeamsListComponent},
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
    TeamsListComponent,
    TeamElementComponent,
    TeamBoardComponent,
    BoardElementComponent,
    ModalComponent,
    DummyComponent,
    TeamfilterPipe,
    AlertComponent,
    CreateTeamComponent,
    SeachUsersComponent,
    MyTeamsComponent,
    RoosterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
    SessionService,
    EventService,
    TeamService,
    ModalService,
    UserService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {


}
