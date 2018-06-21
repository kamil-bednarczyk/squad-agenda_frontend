import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AppService {
  constructor(private router: Router, private http: HttpClient) {
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

    this.http.post('http://localhost:8092/oauth/token', body, httpOptions).subscribe(res => console.log(res));
  }
}
