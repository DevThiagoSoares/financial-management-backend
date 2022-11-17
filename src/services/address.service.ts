import { Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from '../dto/address/create-address.dto';
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

      async update(id: number, updateAddressDto: UpdateAddressDto) {
            try {
                  const data = await this.prisma.address.update({
                        where: { id },
                        data: updateAddressDto,
                  });

                  return data;
            } catch (error) {
                  console.log(error);

                  throw new Error(error.message);
            }
      }

      remove(id: number) {
            return this.prisma.address.delete({
                  where: { id },
            });
      }
}
