/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginatedResult } from './paginated-result.interface';

@Injectable()
export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async getAll(relations = []): Promise<any[]> {
    return this.repository.find({ relations });
  }

  async paginate(page = 1, relations = []): Promise<PaginatedResult> {
    const take = 10;

    const [data, total] = await this.repository.findAndCount({
      take,
      skip: (page - 1) * take,
      relations,
    });

    return {
      data: data,
      meta: {
        total,
        take,
        page,
        last_page: Math.ceil(total / take),
      },
    };
  }

  async create(data): Promise<any> {
    try {
      const newUser = await this.repository.save(data);
      delete newUser.password;
      return newUser;
    } catch (error) {
      if (error.code === '23505') {
        // duplicate user
        throw new ConflictException('This record already exists');
      } else {
        throw new InternalServerErrorException();
      }
      //console.log(error.code);
    }
  }

  async findOne(condition, relations = []): Promise<any> {
    return await this.repository.findOne(condition, { relations });
  }

  async update(id: number, data): Promise<any> {
    return await this.repository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }
}
