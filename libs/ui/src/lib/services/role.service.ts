/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  endpoint = '/api/roles';
  constructor(private http: HttpClient) {}

  all(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}`);
  }
}
