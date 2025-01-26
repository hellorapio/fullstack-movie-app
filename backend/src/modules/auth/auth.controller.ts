import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async Signup() {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login() {}
}
