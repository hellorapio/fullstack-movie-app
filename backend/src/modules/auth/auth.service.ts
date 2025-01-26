import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import SignupDTO from './dto/signup.dto';
import LoginDTO from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(data: SignupDTO) {
    const user = await this.prisma.user.create({ data });
    delete user.password;
    return user;
  }

  async login(data: LoginDTO) {
    const user = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (user.password !== data.password)
      throw new UnauthorizedException('the password is incorrect');

    return user;
  }
}
