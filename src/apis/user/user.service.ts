import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRequestDto } from './dto/create-user';
import { generateUuid } from 'src/utils/uuid';
import { hash } from 'src/utils/hash';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(body: CreateUserRequestDto) {
    const id = generateUuid();
    const { password } = body;

    const hashed = await hash(password);
    const user = { ...body, id, password: hashed };

    await this.prisma.user
      .create({
        data: user,
      })
      .catch((err) => {
        throw new Error(err);
      });

    const { password: pw, ...rest } = await this.prisma.user.findFirst({
      where: { id },
    });

    return rest;
  }
}
