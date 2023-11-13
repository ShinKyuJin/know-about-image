import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { QRCodeModule } from './apis/qr-code/qr-code.module';
import { UserModule } from './apis/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './apis/auth/auth.module';

@Module({
  imports: [
    QRCodeModule,
    UserModule,
    AuthModule,
    PassportModule.register({ defaultStrategy: 'local' }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
