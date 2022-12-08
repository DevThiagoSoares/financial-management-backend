import { Injectable } from '@nestjs/common';
import { generateQueryByFiltersForUser } from '../../config/database/Queries';
import { Page, PageResponse } from '../../config/database/page.model';
import { Pageable } from '../../config/database/pageable.service';
import { PrismaService } from '../../config/database/prisma.service';
import { FiltersUserDTO } from '../../dto/user/filterUser.dto';
import { User } from '../../entities/user.entity';
import IUserRepository from './user.repository.contract';

@Injectable()
export class UserRepository extends Pageable<User> implements IUserRepository {
      constructor(private readonly repository: PrismaService) {
            super();
      }
      async findAll(
            page: Page,
            filters?: FiltersUserDTO,
      ): Promise<PageResponse<User>> {
            const condition = generateQueryByFiltersForUser(filters);

            const items = condition
                  ? await this.repository.user.findMany({
                          ...this.buildPage(page),
                          where: condition,
                    })
                  : await this.repository.user.findMany({
                          ...this.buildPage(page),
                    });

            const total = condition
                  ? await this.repository.user.findMany({
                          where: {
                                ...condition,
                          },
                    })
                  : await this.repository.user.count();

            return this.buildPageResponse(
                  items,
                  Array.isArray(total) ? total.length : total,
            );
      }

      findById(id: number): Promise<User> {
            throw new Error('Method not implemented.');
      }
      //   findByCpf(cpf: string): Promise<User> {
      //         throw new Error('Method not implemented.');
      //   }

      create(data: User): Promise<User> {
            return this.repository.user.create({
                  data: {
                        id: data.id,
                        name: data.name,
                        fone: data.fone,
                        address: {
                              create: {
                                    city: data.address.city,
                                    district: data.address.district,
                                    number: data.address.number,
                                    street: data.address.street,
                                    createdAt: data.address.createdAt,
                              },
                        },
                        loan: {
                              create: {
                                    value_loan: data.loan.value_loan,
                                    createdAt: data.address.createdAt,
                              },
                        },
                        createdAt: data.createdAt,
                  },
            });
      }
      delete(id: number): Promise<User> {
            return this.repository.user.delete({
                  where: { id },
            });
      }
      listAll(
            page: Page,
            filters?: FiltersUserDTO,
      ): Promise<PageResponse<User>> {
            throw new Error('Method not implemented.');
      }
      listById(id: number): Promise<User> {
            return this.repository.user.findUnique({
                  where: { id },
            });
      }
      //   findByCpf(cpf: string): Promise<User> {
      //         return this.repository.user.findUnique({
      //               where: { cpf },
      //         });
      //   }
      update(data: User): Promise<User> {
            return this.repository.user.update({
                  data: {
                        name: data.name,
                        fone: data.fone,
                        address: {
                              update: {
                                    city: data.address.city,
                                    district: data.address.district,
                                    number: data.address.number,
                                    street: data.address.street,
                              },
                        },
                        loan: {
                              update: {
                                    where: {
                                          id: data.loan.id,
                                    },
                                    data: {
                                          value_loan: data.loan.value_loan,
                                    },
                              },
                        },
                  },
                  where: {
                        id: data.id,
                  },
            });
      }
}
