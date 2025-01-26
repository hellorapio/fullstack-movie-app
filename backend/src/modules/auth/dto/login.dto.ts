import { IsEmail, IsString } from 'class-validator';

export default class LoginDTO {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
