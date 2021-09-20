import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    emails = [
        {name: 'email1', email: 'test1@test.com', id: '001'},
        {name: 'email2', email: 'test2@test.com', id: '002'},
        {name: 'email3', email: 'test3@test.com', id: '003'},
        {name: 'email4', email: 'test4@test.com', id: '004'}
    ]
    getEmails(){
        return this.emails;
    }
}
