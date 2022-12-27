import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { UpdateAddressDto } from '../dto/address/update-address.dto';

@Controller('address')
export class AddressController {
      constructor(private readonly addressService: AddressService) {}

      @Get()
      findAll() {
            return this.addressService.findAll();
      }

      @Get(':id')
      findOne(@Param('id') id: string) {
            return this.addressService.findOne(id);
      }

      @Put(':clientId')
      update(
            @Param('clientId') clientId: string,
            @Body() updateAddressDto: UpdateAddressDto,
      ) {
            return this.addressService.update(clientId, updateAddressDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.addressService.remove(id);
      }
}
