import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignupDTO from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signup(@Body() body: SignupDTO) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@body) {}
}
