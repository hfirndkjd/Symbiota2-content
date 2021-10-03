import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class EmailService extends RestService {
  endpoint = '/api/emails';
}
