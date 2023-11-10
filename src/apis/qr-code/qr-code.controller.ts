import { Controller, Get } from '@nestjs/common';
import { QRCodeService } from './qr-code.service';

@Controller('qr-code')
export class QRCodeController {
  constructor(readonly qrcodeService: QRCodeService) {}

  @Get()
  generateQRCode() {
    return this.qrcodeService.generate();
  }
}
