import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { UpdateAddressDto } from '../dto/address/update-address.dto';

@Injectable()
export class AddressService {
      constructor(private readonly prisma: PrismaService) {}

      findAll() {
            return this.prisma.address.findMany();
      }

      findOne(id: number) {
            return this.prisma.address.findUnique({
                  where: { id },
            });
      }

      async update(userId: number, updateAddressDto: UpdateAddressDto) {
            try {
                  const data = await this.prisma.address.update({
                        where: { userId },
                        data: updateAddressDto,
                  });

                  return data;
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      remove(id: number) {
            return this.prisma.address.delete({
                  where: { id },
            });
      }
}
