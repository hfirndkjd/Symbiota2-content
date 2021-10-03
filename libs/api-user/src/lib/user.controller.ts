/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UserCreateDto } from './model/user-create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';
import { AuthInterceptor } from '../../../api-auth/src/lib/auth.interceptor';
import { AuthGuard } from '../../../api-auth/src/lib/auth.guard';
import { UserUpdateDto } from './model/user-update.dto';
import { AuthService } from 'libs/api-auth/src/lib/api-auth.service';
import { Request } from 'express';
// import { PaginatedResult } from 'libs/api-common/src/lib/paginated-result.interface';
import { HasPermission } from 'libs/api-permission/src/lib/api-has-permission.decorator';
import { RegisterDto } from 'libs/api-auth/src/lib/model/register.dto';
import { passDto } from './model/password.dto';
// import { RegisterDto } from 'libs/api-auth/src/lib/model/register.dto';

@UseInterceptors(ClassSerializerInterceptor, AuthInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Get()
  @HasPermission('users')
  async getUsers(@Query('page') page = 1) {
    return this.userService.paginate(page, ['role']);
  }

  @Post()
  @HasPermission('users')
  async createUser(@Body() body: UserCreateDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash('A12345', salt);

    const { roleId = 3, ...data } = body;

    return this.userService.create({
      ...data,
      password,
      role: { id: roleId },
    });
    // return this.userService.register({
    //   firstName: body.firstName,
    //   lastName: body.lastName,
    //   email: body.email,
    //   password,
    //   role: { id: body.roleId },
    // });
  }

  @Get(':id')
  @HasPermission('users')
  async getUserById(@Param('id') id: number) {
    return this.userService.findOne({ id }, ['role']);
  }

  @Put('info')
  async updateInfo(@Req() request: Request, @Body() body: UserUpdateDto) {
    const id = await this.authService.userId(request);
    await this.userService.update(id, body);

    return this.userService.findOne({ id });
  }

  @Put('password')
  @UsePipes(RegisterDto)
  async updatePassword(@Req() request: Request, @Body() body: passDto) {
    const { password, passwordConfirm } = body;
    if (password !== passwordConfirm) {
      throw new BadRequestException('Passwords do not match!');
    }

    const id = await this.authService.userId(request);

    const salt = await bcrypt.genSalt();

    const hashed = await bcrypt.hash(password, salt);

    //const hashed = await bcrypt.hash(password, 12);

    await this.userService.update(id, {
      password: hashed,
    });

    return this.userService.findOne({ id });
  }

  @Put(':id')
  @HasPermission('users')
  async updateUser(@Param('id') id: number, @Body() body: UserUpdateDto) {
    const { roleId, ...data } = body;
    await this.userService.update(id, {
      ...data,
      role: { id: roleId },
    });

    return this.userService.findOne({ id });
  }

  @Delete(':id')
  @HasPermission('users')
  async deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
