import { FiltersUserDTO } from '../../dto/user/filterUser.dto';
import { Page, PageResponse } from '../../config/database/page.model';
import { User } from '../../entities/user.entity';

export default interface IUserRepository {
      create(data: User): Promise<User>;
      delete(id: number): Promise<User>;
      findAll(
            page: Page,
            filters?: FiltersUserDTO,
      ): Promise<PageResponse<User>>;
      findById(id: number): Promise<User>;
      //   findByCpf(cpf: string): Promise<User>;
      update(data: User): Promise<User>;
}
