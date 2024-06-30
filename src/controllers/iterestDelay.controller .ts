import {
      Controller,
      Get,
      Post,
      Body,
      Param,
      Delete,
      Put,
} from '@nestjs/common';
import { IterestDelayService } from '../services/iterestDelay.service';
import { CreateIterestDelayDto } from '../dto/iterestDelay/create-iterestDelay.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateIterestDelayDto } from 'src/dto/iterestDelay/update-iterestDelay.dto';

@ApiTags('IterestDelay')
@ApiBearerAuth()
@Controller('api/iterest-delay')
export class IterestDelayController {
      constructor(private readonly iterestDelayService: IterestDelayService) {}

      @ApiOperation({ 
            summary: 'Criar Joros Mora',
            description:
                  'Utilize este endpoint para criar um novo empréstimo.',
      })
      @Post()
      create(@Body() payload: CreateIterestDelayDto) {
            return this.iterestDelayService.create(payload);
      }

      @ApiOperation({
            summary: 'Buscar Juros Mora por Id',
            description:
                  'Utilize este endpoint para buscar um juros mora por ID.',
      })
      @Get(':id')
      findOne(@Param('id') id: string) {
            return this.iterestDelayService.findById(id);
      }


      @ApiOperation({
            summary: 'Atualizar Empréstimo',
            description:
                  'Utilize este endpoint para atualizar um empréstimo.',
      })
      @Put(':id')
      update(@Param('id') id: string, @Body() data: UpdateIterestDelayDto) {
            return this.iterestDelayService.update(id, data);
      }

}
