/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { RoleEntity } from '../../../api-role/src/lib/api-role.entity';
import { IsOptional } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  //@Column({ nullable: true })
  @IsOptional()
  description: string;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => RoleEntity)
  //@JoinColumn({name: 'role_id'}) // for changing the name
  role: RoleEntity;
}
