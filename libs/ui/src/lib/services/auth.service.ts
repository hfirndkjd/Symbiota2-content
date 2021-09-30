/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserCreateInterface } from '../interfaces/user-create';
import { UserLoginInterface } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data: UserLoginInterface): Observable<UserLoginInterface> {
    return this.http.post<UserLoginInterface>('/api/login', data);
  }

  register(data: UserCreateInterface): Observable<UserCreateInterface> {
    return this.http.post<UserCreateInterface>('/api/register', data);
  }

  currentUser(): Observable<any> {
    return this.http.get('/api/user');
  }

  logout(): Observable<void> {
    return this.http.post<void>('/api/logout', {});
  }

  updateInfo(data: User): Observable<User> {
    return this.http.put<User>('/api/users/info', data);
  }

  updatePassword(data: User): Observable<User> {
    return this.http.put<User>('/api/users/password', data);
  }
}
