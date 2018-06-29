import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from '../service/session.service';
import {TeamService} from '../service/team.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: UserModel = new UserModel();
  placeholderImagePath: string;

  constructor(private httpClient: HttpClient,
              private sessionService: SessionService,
              private teamService: TeamService) {
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': '*/*'
      })
    };

    this.placeholderImagePath = '/assets/placeholder.png';
    this.httpClient.get<UserModel>('http://localhost:8092/users/username/' + this.sessionService.getUsername())
      .subscribe(response => this.user = response);
  }

}
