import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('sign-in')
  signIn(@Body() body: LoginRequestDto) {
    const { army_number, password } = body;

    return this.service.validateUser(army_number, password);
  }
}
