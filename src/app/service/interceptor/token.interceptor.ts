import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SessionService} from '../session.service';
import {AuthService} from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService, private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {

      const token = this.sessionService.getAccessToken();
      console.log(token);
      let changedRequest = request;
      // HttpHeader object immutable - copy values
      const headerSettings: { [name: string]: string | string[]; } = {};

      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
      headerSettings['Content-Type'] = 'application/json';
      headerSettings['Authorization'] = 'Bearer ' + token;
      headerSettings['accept'] = '*/*';
      const newHeader = new HttpHeaders(headerSettings);

      changedRequest = request.clone({
        headers: newHeader
      });
      return next.handle(changedRequest);
    } else {
      return next.handle(request);
    }

  }

}
