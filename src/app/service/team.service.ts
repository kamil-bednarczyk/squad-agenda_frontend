import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

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
}
