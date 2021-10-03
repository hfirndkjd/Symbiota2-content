/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'libs/api-common/src/lib/abstract.service';
import { Repository } from 'typeorm';
import { Email } from './email.entity';
import { SendEmailDto } from './model/send-email.dto';

@Injectable()
export class EmailService extends AbstractService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
    private mailerService: MailerService
  ) {
    super(emailRepository);
  }

  async sendEmail(data: SendEmailDto) {
    const { to, subject, html } = data;

    // for (let i = 0; i < 5; i++) {
    //   await this.mailerService.sendMail({
    //     to,
    //     subject,
    //     html,
    //   });
    // }

    await this.mailerService.sendMail({
      to,
      subject,
      html,
    });
  }
}
