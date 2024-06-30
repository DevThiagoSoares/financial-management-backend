import {
      Controller,
      Get,
      Post,
      Body,
      Param,
      Delete,
      Put,
      Query,
      UseGuards,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { CreateClientDto } from '../dto/client/createClient.dto';
import { UpdateClientDto } from '../dto/client/updateClient.dto';
import { FiltersClientDTO } from '../dto/client/filterClient.dto';
import { Page, PageResponse } from 'src/config/database/page.model';
import { MappedClientDTO } from 'src/dto/client/mappedClient.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/decorators/public.decorator';
import { Private } from 'src/decorators/private.decorator';
import { JwtAuthGuard } from 'src/config/authentication/guards/jwtAuth.guard';

@ApiTags('Client')
@ApiBearerAuth()
@Controller('api/client')
export class ClientController {
      constructor(private readonly clientService: ClientService) {}
      
      @ApiOperation({
            summary: 'Criar Cliente',
            description:
            'Utilize este endpoint para criar um novo cliente.',
      })
      @Post()
      create(@Body() createClientDto: CreateClientDto) {
            return this.clientService.create(createClientDto);
      }

      @ApiOperation({
            summary: 'Listar Clientes com pagamentos pendentes',
            description:
                'Utilize este endpoint para listar todos os clientes com pagamentos pendentes.',
      })
      @Get('/notPayment')
      listAllFalse(
            @Query() page: Page,
            @Query() filters: FiltersClientDTO,
      ): Promise<PageResponse<MappedClientDTO>> {
            return this.clientService.listAllFalse(page, filters);
      }

      @ApiOperation({
            summary: 'Listar Clientes',
            description:
                'Utilize este endpoint para listar todos os clientes.',
        })
      @Get('')
      listAll(
            @Query() page: Page,
            @Query() filters: FiltersClientDTO,
      ): Promise<PageResponse<MappedClientDTO>> {
            return this.clientService.listAll(page, filters);
      }

      @ApiOperation({
            summary: 'Listar Clientes com pagamentos confirmados',
            description:
                'Utilize este endpoint para listar todos os clientes com pagamentos confirmados.',
        })
      @Get('/paymentConfirmed')
      listAllTrue(
            @Query() page: Page,
            @Query() filters: FiltersClientDTO,
      ): Promise<PageResponse<MappedClientDTO>> {
            return this.clientService.listAllTrue(page, filters);
      }

      @ApiOperation({
            summary: 'Buscar Cliente',
            description:
                'Utilize este endpoint para buscar um cliente por ID.',
        })
      @Get(':id')
      async listById(@Param('id') id: string) {
            return await this.clientService.listById(id);
      }

      @ApiOperation({
            summary: 'Atualizar Cliente',
            description:
                'Utilize este endpoint para atualizar um cliente.',
        })
      @Put(':id')
      update(
            @Param('id') id: string,
            @Body() updateclientDto: UpdateClientDto,
      ) {
            return this.clientService.update(id, updateclientDto);
      }

      @ApiOperation({
            summary: 'Deletar Cliente',
            description:
                'Utilize este endpoint para deletar um cliente.',
        })
      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.clientService.delete(id);
      }
}
