import {
      Controller,
      Get,
      Post,
      Body,
      Patch,
      Param,
      Delete,
      Put,
} from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { CreateAddressDto } from '../dto/address/create-address.dto';
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
            return this.addressService.findOne(+id);
      }

      @Put(':id')
      update(
            @Param('id') id: string,
            @Body() updateAddressDto: UpdateAddressDto,
      ) {
            return this.addressService.update(+id, updateAddressDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.addressService.remove(+id);
      }
}
