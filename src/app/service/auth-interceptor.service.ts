import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return next.handle(req);
    }

    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }
}
