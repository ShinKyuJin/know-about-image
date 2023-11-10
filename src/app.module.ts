import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { QRCodeModule } from './apis/qr-code/qr-code.module';
import { UserModule } from './apis/user/user.module';

@Module({
  imports: [QRCodeModule, UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
