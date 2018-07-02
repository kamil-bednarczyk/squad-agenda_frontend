import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AddMemberModel} from '../model/add.member.model';
import {TeamModel} from '../model/team.model';
import {SessionService} from './session.service';

@Injectable()
export class TeamService {

  static TEAMS_URL = 'http://localhost:8094/teams';
  static MEMBERS_URL = 'http://localhost:8094/members';

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {
  }

  getAllTeams() {
    return this.httpClient.get(TeamService.TEAMS_URL,
      {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8', 'accept': '*/*'})});
  }

  getTeam(id: string) {
    return this.httpClient.get(TeamService.TEAMS_URL + '/' + id);
  }

  updateTeamStatus(username: string, id: string, status: string) {
    return this.httpClient.put(TeamService.MEMBERS_URL, new AddMemberModel(id, '', username, status));
  }

  createTeam(team: TeamModel) {
    return this.httpClient.post(TeamService.TEAMS_URL, JSON.stringify(team));
  }

  getTeamsForUser() {
    return this.httpClient.get(TeamService.TEAMS_URL + '/name/' + this.sessionService.getUsername());
  }
}
