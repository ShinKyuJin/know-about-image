import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QRCodeService {
  constructor(private readonly prisma: PrismaService) {}

  async generate() {
    return this.prisma.user.findMany();
  }
}
