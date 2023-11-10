import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRequestDto } from './dto/login.request';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  login(body: LoginRequestDto) {}
}
