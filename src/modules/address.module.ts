import { Module } from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { AddressController } from '../controllers/address.controller';
import { PrismaService } from '../config/database/prisma.service';

@Module({
      controllers: [AddressController],
      providers: [AddressService, PrismaService],
})
export class AddressModule {}
