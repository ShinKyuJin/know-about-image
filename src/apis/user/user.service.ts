import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRequestDto } from './dto/create-user';
import { generateUuid } from 'src/utils/uuid';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(body: CreateUserRequestDto) {
    const id = generateUuid();

    await this.prisma.user
      .create({
        data: {
          ...body,
          id,
        },
      })
      .catch((err) => {
        throw new Error(err);
      });

    return this.prisma.user.findFirst({ where: { id } });
  }
}
