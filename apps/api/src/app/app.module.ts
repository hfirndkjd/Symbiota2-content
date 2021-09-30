/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from '@symbiota/api-email';
import { UserModule } from '@symbiota/api-user';
import { ApiAuthModule } from '@symbiota/api-auth';
import { ApiRoleModule } from '@symbiota/api-role';
import { ApiPermissionModule } from '@symbiota/api-permission';
import { APP_GUARD } from '@nestjs/core';
import { PermissionGuard } from 'libs/api-permission/src/lib/api-permission.guard';

@Module({
  imports: [
    UserModule,
    EmailModule,
    ApiAuthModule,
    ApiRoleModule,
    ApiPermissionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'symbiota2-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
    AppService,
  ],
})
export class AppModule {}
