/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Controller, Get, UseGuards } from '@nestjs/common';
// import { HasPermission } from './api-has-permission.decorator';
import { ApiPermissionService } from './api-permission.service';
import { AuthGuard } from 'libs/api-auth/src/lib/auth.guard';

@UseGuards(AuthGuard)
@Controller('permissions')
export class ApiPermissionController {
  constructor(private apiPermissionService: ApiPermissionService) {}

  @Get()
  //@HasPermission('view_permissions')
  async all() {
    return this.apiPermissionService.getAll();
  }
}
