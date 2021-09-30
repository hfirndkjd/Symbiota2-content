import { Module } from '@nestjs/common';
import { ApiRoleController } from './api-role.controller';
import { RoleEntity } from './api-role.entity';
import { ApiRoleService } from './api-role.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [ApiRoleController],
  providers: [ApiRoleService],
  exports: [ApiRoleService],
})
export class ApiRoleModule {}
