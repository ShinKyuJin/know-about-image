import { IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  army_number: string;

  @IsString()
  password: string;
}
