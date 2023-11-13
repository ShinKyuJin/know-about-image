import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { isHashValid } from 'src/utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(army_number: string, password: string) {
    const user = await this.prisma.user.findFirst({ where: { army_number } });

    if (!isHashValid(password, user.password)) {
      throw new Error('');
    }

    const { id, army_number: an } = user;

    const payload = { sub: id, army_number: an };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return { token };
  }
}
