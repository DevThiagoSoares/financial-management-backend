import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { UpdateAddressDto } from '../dto/address/update-address.dto';

@Injectable()
export class AddressService {
      constructor(private readonly prisma: PrismaService) {}

      findAll() {
            return this.prisma.address.findMany();
      }

      findOne(id: string) {
            return this.prisma.address.findUnique({
                  where: { id },
            });
      }

      async update(clientId: string, updateAddressDto: UpdateAddressDto) {
            try {
                  const data = await this.prisma.address.update({
                        where: { clientId },
                        data: updateAddressDto,
                  });

                  return data;
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      remove(id: string) {
            return this.prisma.address.delete({
                  where: { id },
            });
      }
}
