import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './apis/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(army_number: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(army_number, password);
    if (!user) {
      throw new Error('');
    }
    return user;
  }
}
