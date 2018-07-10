import {Injectable} from '@angular/core';
import {SessionService} from './session.service';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable()
export class UserService {

  static USER_URL = 'http://localhost:8092/users';
  static AVATARs_URLS = 'http://localhost:8092/avatars/';


  constructor(private httpClient: HttpClient,
              private sessionService: SessionService) {
  }

  sendAvatar(form: FormData) {
    const req = new HttpRequest('POST', UserService.AVATARs_URLS + this.sessionService.getUsername(), form, {
      reportProgress: true,
      responseType: 'text',
    });

    return this.httpClient.request(req);
  }

  getAvatar(username: string) {
    return this.httpClient.get(UserService.AVATARs_URLS + username);
  }
}
