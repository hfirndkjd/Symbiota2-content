import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
export class EmailCreateDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;
}
