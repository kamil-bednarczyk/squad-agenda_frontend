import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
  private access_token: string = null;
  private username: string;

  setJWT(JWT: Object) {
    this.access_token = JWT['access_token'];

    localStorage.setItem('access_token', this.access_token);
  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  getAccessToken() {
    return this.access_token;
  }

  clear() {
    this.access_token = null;
    localStorage.removeItem('access_token');
  }

}
