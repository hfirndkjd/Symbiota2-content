/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiRoleService } from './api-role.service';
import { HasPermission } from 'libs/api-permission/src/lib/api-has-permission.decorator';

@Controller('roles')
export class ApiRoleController {
  constructor(private apiRoleService: ApiRoleService) {}

  @Get()
  @HasPermission('roles')
  async allRoles() {
    return await this.apiRoleService.getAll();
  }

  @Post()
  @HasPermission('roles')
  async createRole(
    @Body('name') name: string,
    @Body('permissions') ids: number[]
  ) {
    return await this.apiRoleService.create({
      name,
      permissions: ids.map((id) => ({ id })),
    });
  }

  @Get(':id')
  @HasPermission('roles')
  async getRole(@Param('id') id: number) {
    return await this.apiRoleService.findOne({ id }, ['permissions']);
  }

  @Put(':id')
  async updateRole(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('permissions') ids: number[]
  ) {
    await this.apiRoleService.update(id, { name });

    const role = await this.apiRoleService.findOne({ id });

    return await this.apiRoleService.create({
      ...role,
      permissions: ids.map((id) => ({ id })),
    });
  }

  @Delete(':id')
  @HasPermission('roles')
  async deleteRole(@Param('id') id: number) {
    return await this.apiRoleService.delete(id);
  }
}
