/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'libs/api-auth/src/lib/api-auth.service';
import { UserService } from 'libs/api-user/src/lib/user.service';
import { ApiRoleService } from 'libs/api-role/src/lib/api-role.service';
import { User } from 'libs/api-user/src/lib/user.entity';
import { RoleEntity } from 'libs/api-role/src/lib/api-role.entity';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
    private userService: UserService,
    private roleService: ApiRoleService
  ) {}
  async canActivate(context: ExecutionContext) {
    const access = this.reflector.get<string>('access', context.getHandler());
    console.log('access: ' + access);
    if (!access) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const id = await this.authService.userId(request);

    const user: User = await this.userService.findOne({ id }, ['role']);

    const role: RoleEntity = await this.roleService.findOne(
      { id: user.role.id },
      ['permissions']
    );

    if (request.method === 'GET') {
      return role.permissions.some(
        (p) => p.name === `view_${access}` || p.name === `edit_${access}`
      );
    }

    return role.permissions.some((p) => p.name === `edit_${access}`);
    // some() checks if a vlaue exists in an array.
    //console.log(role);
    //return true;
  }
}
