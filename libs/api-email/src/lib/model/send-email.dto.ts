import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
export class SendEmailDto {
  @IsNotEmpty()
  @IsEmail()
  to!: [];

  @IsOptional()
  subject!: string;

  @IsNotEmpty()
  html!: string;
}
