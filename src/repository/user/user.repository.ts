import { Injectable } from '@nestjs/common';
import { generateQueryByFiltersForUser } from '../../config/database/Queries';
import { Page, PageResponse } from '../../config/database/page.model';
import { Pageable } from '../../config/database/pageable.service';
import { PrismaService } from '../../config/database/prisma.service';
import { FiltersUserDTO } from '../../dto/user/filterUser.dto';
import { User } from '../../entities/user.entity';
import IUserRepository from './user.repository.contract';
import { Loan } from 'src/entities/loan.entity';
import { asapScheduler } from 'rxjs';
import { AbstractInstanceResolver } from '@nestjs/core/injector/abstract-instance-resolver';

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
                          include: {
                                address: true,
                                loan: true,
                          },
                    })
                  : await this.repository.user.findMany({
                          ...this.buildPage(page),
                          include: {
                                address: true,
                                loan: true,
                          },
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
                              },
                        },
                        loan: {
                              createMany: {
                                    data: data.loan.map<Loan>((loan) => ({
                                          value_loan: loan.value_loan,
                                    })),
                              },
                        },
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
      update(id: number, data: User): Promise<User> {
            return this.repository.user.update({
                  where: {
                        id,
                  },
                  data: {
                        name: data.name,
                        fone: data.fone,
                        address: {
                              update: {
                                    city: data.address.city,
                                    street: data.address.street,
                                    district: data.address.district,
                                    number: data.address.number,
                              },
                        },
                        loan: {
                              createMany: {},
                        },
                  },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }
}
