import {Injectable} from '@angular/core';
import {SessionService} from './session.service';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class UserService {

  static USER_URL = 'http://localhost:8092/users';


  constructor(private httpClient: HttpClient,
              private sessionService: SessionService) {
  }

  sendAvatar(form: FormData) {
    const req = new HttpRequest('POST', UserService.USER_URL + '/avatars/' + this.sessionService.getUsername(), form, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
}
