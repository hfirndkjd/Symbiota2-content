import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailerMailingListService {
  receivers: string[] = [];

  setReceivers(data: string[]) {
    this.receivers = data;
    //console.log('data received: ', data);
    //console.log('data saved: ', this.receivers);
  }
  getReceivers() {
    //console.log('data returned back: ', this.receivers);
    return this.receivers;
  }
}
