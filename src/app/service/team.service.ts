import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TeamModel} from '../model/team.model';

@Injectable()
export class TeamService {
  constructor(private httpClient: HttpClient) {
  }

  getAllTeams() {
    return this.httpClient.get('http://localhost:8094/teams',
      {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8', 'accept': '*/*'})});
  }
}
