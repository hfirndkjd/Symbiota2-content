/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'libs/api-common/src/lib/abstract.service';
import { Repository } from 'typeorm';
import { Email } from './email.entity';

@Injectable()
export class EmailService extends AbstractService {
  constructor(
    @InjectRepository(Email) private readonly emailRepository: Repository<Email>
  ) {
    super(emailRepository);
  }
}
