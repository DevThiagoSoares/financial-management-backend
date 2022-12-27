import {
      Controller,
      Get,
      Post,
      Body,
      Param,
      Delete,
      Put,
      Query,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { CreateClientDto } from '../dto/client/createClient.dto';
import { UpdateClientDto } from '../dto/client/updateClient.dto';
import { FiltersClientDTO } from '../dto/client/filterClient.dto';
import { Page, PageResponse } from 'src/config/database/page.model';
import { MappedClientDTO } from 'src/dto/client/mappedClient.dto';

@Controller('api/client')
export class ClientController {
      constructor(private readonly clientService: ClientService) {}

      @Post()
      create(@Body() createClientDto: CreateClientDto) {
            return this.clientService.create(createClientDto);
      }

      @Get()
      listAll(
            @Query() page: Page,
            @Query() filters: FiltersClientDTO,
      ): Promise<PageResponse<MappedClientDTO>> {
            return this.clientService.listAll(page, filters);
      }

      @Get(':id')
      async listById(@Param('id') id: string) {
            return await this.clientService.listById(id);
      }

      @Put(':id')
      update(
            @Param('id') id: string,
            @Body() updateclientDto: UpdateClientDto,
      ) {
            return this.clientService.update(id, updateclientDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.clientService.delete(id);
      }
}
