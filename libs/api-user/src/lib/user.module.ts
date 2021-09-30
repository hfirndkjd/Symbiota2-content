/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CommonModule } from 'libs/api-common/src/lib/common.module';
import { ApiAuthModule } from 'libs/api-auth/src/lib/api-auth.module';
import { UploadController } from './upload.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CommonModule, ApiAuthModule],
  controllers: [UserController, UploadController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
