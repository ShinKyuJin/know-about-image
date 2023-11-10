import { Module } from '@nestjs/common';
import { QRCodeService } from './qr-code.service';
import { QRCodeController } from './qr-code.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [QRCodeController],
  providers: [QRCodeService, PrismaService],
})
export class QRCodeModule {}
