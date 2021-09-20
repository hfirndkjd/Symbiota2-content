import { Test } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

describe('EmailController', () => {
  let controller: EmailController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmailService],
      controllers: [EmailController],
    }).compile();

    controller = module.get(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
