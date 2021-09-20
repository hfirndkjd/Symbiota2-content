import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    users = [
        {name: 'user1', email: 'test1@test.com', id: '001'},
        {name: 'user2', email: 'test2@test.com', id: '002'},
        {name: 'user3', email: 'test3@test.com', id: '003'},
        {name: 'user4', email: 'test4@test.com', id: '004'}
    ]
    getUsers() {
        return this.users;
    }
}
