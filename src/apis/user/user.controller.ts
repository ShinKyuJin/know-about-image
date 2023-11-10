import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  async createUser(@Body() body: CreateUserRequestDto) {
    return this.service.createUser(body);
  }
}
