import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../auth";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = Auth.getApiToken();
    if (token) {
      const cloned = req.clone({
        //headers: req.headers.set("api_token", token)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
