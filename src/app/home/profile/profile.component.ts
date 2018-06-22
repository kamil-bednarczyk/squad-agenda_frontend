import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from '../../service/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserModel = new UserModel();
  placeholderImagePath: string;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {
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
