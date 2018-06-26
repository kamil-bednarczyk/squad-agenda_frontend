import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {RequestMethod} from "@angular/http";
import {AuthService} from "../service/auth.service";
import {MockAuthService} from "./mock-auth.service";


export class HttpMockInterceptor implements HttpInterceptor {


  constructor(private mockAuthService: MockAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    switch (request.method) {
      case RequestMethod[RequestMethod.Post].toUpperCase():
        return this.interceptPostMethod(request, next);
      case RequestMethod[RequestMethod.Get].toUpperCase():
      // return this.interceptGetMethod(request, next);
      case RequestMethod[RequestMethod.Put].toUpperCase():
      // return this.interceptPutMethod(request, next);
      case RequestMethod[RequestMethod.Delete].toUpperCase():
      // return this.interceptDeleteMethod(request, next);
      default:
        return next.handle(request);
    }
  }

  interceptPostMethod(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url.endsWith(AuthService.loginUrl)) {
      return this.mockAuthService.logIn(req.body['username'], req.body['password']);
    }
    return next.handle(req);
  }
}
