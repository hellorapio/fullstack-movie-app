import { IsEmail, IsString } from "class-validator";

export default class SignupDTO {
  @IsString()
  name: string
  
  @IsEmail()
  email: string
  
  @IsString()
  password: string
}