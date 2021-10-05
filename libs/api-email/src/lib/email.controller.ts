/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { AuthGuard } from 'libs/api-auth/src/lib/auth.guard';
import { EmailCreateDto } from './model/email-create.dto';
import { EmailUpdateDto } from './model/email-update.dto';
import { HasPermission } from 'libs/api-permission/src/lib/api-has-permission.decorator';
import { SendEmailDto } from './model/send-email.dto';

@Controller('emails')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Get()
  @UseGuards(AuthGuard)
  @HasPermission('emails')
  async getAll(@Query('page') page = 1) {
    return this.emailService.paginate(page);
  }

  @Post()
  @UseGuards(AuthGuard)
  @HasPermission('emails')
  async create(@Body() body: EmailCreateDto) {
    return this.emailService.create(body);
  }

  @Post('message')
  async sendEmail(@Body() body: SendEmailDto) {
    return this.emailService.sendEmail(body);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @HasPermission('emails')
  async get(@Param('id') id: number) {
    return this.emailService.findOne({ id });
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @HasPermission('emails')
  async update(@Param('id') id: number, @Body() body: EmailUpdateDto) {
    await this.emailService.update(id, body);

    return this.emailService.findOne({ id });
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HasPermission('emails')
  async delete(@Param('id') id: number) {
    return this.emailService.delete(id);
  }
}
