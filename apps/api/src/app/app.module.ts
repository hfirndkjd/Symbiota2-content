import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmailController, EmailService} from '@symbiota/email';
import {UserController, UserService} from '@symbiota/user';

@Module({
  imports: [],
  controllers: [AppController, EmailController, UserController],
  providers: [AppService, EmailService, UserService],
})
export class AppModule {}
