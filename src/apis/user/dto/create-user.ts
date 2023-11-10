import { IsEmail, IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly cellphone: string;

  @IsString()
  readonly army_number: string;

  @IsString()
  readonly password: string;
}
