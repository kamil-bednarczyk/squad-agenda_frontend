import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from './session.service';

@Injectable()
export class AuthService {

  public static loginUrl = '/oauth/token';

  constructor(private router: Router,
              private http: HttpClient,
              private sessionService: SessionService) {
  }

  logIn(username, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('kassad:kassad'),
        'accept': '*/*'
      })
    };
    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('username', username);
    body.append('password', password);
    body.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost:8092' + AuthService.loginUrl, body, httpOptions);
  }

  logout() {
    this.sessionService.clear();
  }

  isLoggedIn() {
    return this.sessionService.getAccessToken() != null;
  }
}
