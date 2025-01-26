import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignupDTO from './dto/signup.dto';
import LoginDTO from './dto/login.dto';
import Public from 'src/decorators/Public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signup(@Body() body: SignupDTO) {
    const user = await this.authService.signup(body);
    return { status: 'success', message: 'User created', data: user };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDTO) {
    const user = await this.authService.login(body);
    return { status: 'success', message: 'User logged in', data: user };
  }
}
