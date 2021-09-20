import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}
  public emails =  [
    {name: 'email1', email: 'test1@test.com', id: '001'},
    {name: 'email2', email: 'test2@test.com', id: '002'},
    {name: 'email3', email: 'test3@test.com', id: '003'},
    {name: 'email4', email: 'test4@test.com', id: '004'}
]
 @Get()
  getEmails() {
    return this.emailService.getEmails()
  }
}
