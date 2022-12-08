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
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { FiltersUserDTO } from '../dto/user/filterUser.dto';
import { Page, PageResponse } from 'src/config/database/page.model';
import { MappedUserDTO } from 'src/dto/user/mappedUser.dto';

@Controller('user')
export class UserController {
      constructor(private readonly userService: UserService) {}

      @Post()
      create(@Body() createUserDto: CreateUserDto) {
            return this.userService.create(createUserDto);
      }

      @Get()
      listAll(
            @Query() page: Page,
            @Query() filters: FiltersUserDTO,
      ): Promise<PageResponse<MappedUserDTO>> {
            return this.userService.listAll(page, filters);
      }

      @Get(':id')
      async listById(@Param('id') id: string) {
            return await this.userService.listById(+id);
      }

      @Put(':id')
      update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
            return this.userService.update(+id, updateUserDto);
      }

      @Delete(':id')
      remove(@Param('id') id: number) {
            return this.userService.delete(id);
      }
}
