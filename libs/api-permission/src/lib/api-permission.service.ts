/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './api-permission.entity';
import { AbstractService } from 'libs/api-common/src/lib/abstract.service';

@Injectable()
export class ApiPermissionService extends AbstractService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {
    super(permissionRepository);
  }
}
