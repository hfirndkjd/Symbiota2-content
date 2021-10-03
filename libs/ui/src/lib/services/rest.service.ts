/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class RestService {
  abstract get endpoint(): string;

  constructor(protected http: HttpClient) {}

  all(page?: number): Observable<any> {
    let url = this.endpoint;
    if (page) {
      url += `?page=${page}`;
    }
    return this.http.get<any>(url);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.endpoint, data);
  }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.endpoint, data);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
