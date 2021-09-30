/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Module } from '@nestjs/common';
import { ApiPermissionController } from './api-permission.controller';
import { Permission } from './api-permission.entity';
import { ApiPermissionService } from './api-permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'libs/api-common/src/lib/common.module';

@Module({
  imports: [TypeOrmModule.forFeature([Permission]), CommonModule],
  controllers: [ApiPermissionController],
  providers: [ApiPermissionService],
  exports: [ApiPermissionService],
})
export class ApiPermissionModule {}
