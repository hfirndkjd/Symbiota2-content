/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './api-auth.controller';
import { AuthService } from './api-auth.service';
import { UserModule } from '../../../api-user/src/lib/user.module';
import { CommonModule } from '../../../api-common/src/lib/common.module';

@Module({
  imports: [forwardRef(() => UserModule), CommonModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class ApiAuthModule {}
