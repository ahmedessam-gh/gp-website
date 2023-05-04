import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';;
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches a specific pattern
    if (request.url.includes('api')) {
      const currentUser = this.authService.getUser();
      if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser}`
          }
        });
      }
    }
    return next.handle(request);
  }
}