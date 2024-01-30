import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUser } from '../store/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl = 'http://localhost:9001/api/v1/auth/';

  constructor(private http: HttpClient, private router: Router) {}

  login(phoneOrEmail: string, password: string) {
    return this.http.post<AuthenticatedUser>(this.baseUrl + 'login', {
      phoneOrEmail: phoneOrEmail,
      password: password,
    });
  }
}
