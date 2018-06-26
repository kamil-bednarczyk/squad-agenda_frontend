import {HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";

export class MockAuthService {
  logIn(username: string, password: string): Observable<HttpEvent<any>> {
    let response: any;
    switch (username) {
      case 'kamil':
        response = {};
        break;
      case 'test':
        response = {};
        break;
      default:
        response = {};
    }
    return new Observable(resp => {
      resp.next(new HttpResponse({
        status: 200,
        body: response
      }));
      resp.complete();
    });
  }
}
