import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AddMemberModel} from '../model/add.member.model';

@Injectable()
export class TeamService {
  constructor(private httpClient: HttpClient) {
  }

  getAllTeams() {
    return this.httpClient.get('http://localhost:8094/teams',
      {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8', 'accept': '*/*'})});
  }

  getTeam(id: string) {
    return this.httpClient.get('http://localhost:8094/teams/' + id);
  }

  updateTeamStatus(username: string, id: string, status: string) {
    return this.httpClient.put('http://localhost:8094/members', new AddMemberModel(id, '', username, status));
  }
}
