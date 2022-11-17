import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from 'src/entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';

@Injectable()
export class UserService {
      constructor(private readonly prisma: PrismaService) {}

      create(data: CreateUserDto) {
            return this.prisma.user.create({
                  data,
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }

      findAll() {
            return this.prisma.user.findMany({
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }

      findOne(id: number) {
            return this.prisma.user.findUnique({
                  where: { id },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }

      async update(id: number, data: UpdateUserDto) {
            const user = await this.findOne(id);
            if (user) {
                  return await this.prisma.user.update({
                        where: { id },
                        data,
                        include: {
                              address: true,
                              loan: true,
                        },
                  });
            }
      }

      async remove(id: number) {
            return await this.prisma.user.delete({
                  where: { id },
            });
      }
}
