import { Inject, Injectable } from '@nestjs/common';
import ILoanRepository from '../repository/loan/loan.repository.contract';
import { PrismaService } from '../config/database/prisma.service';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';
import IUserRepository from 'src/repository/user/user.repository.contract';

@Injectable()
export class LoanService {
      constructor(
            @Inject('ILoanRepository')
            @Inject('IUserRepository')
            private readonly loanRepository: ILoanRepository,
            private readonly userRepository: IUserRepository,
      ) {}

      async create(data: CreateLoanDto, LoanId: number) {
            console.log(data);
            return await this.loanRepository.create({
                  data: {
                        LoanId: +LoanId,
                        value_loan: data.value_loan,
                  },
            });
      }

      async findAll() {
            return `This action returns all loan`;
      }

      async listById(id: number) {
            const user = await this.loanRepository.findById(id);

            if (!user)
                  throw new HttpException(
                        `Não foi encontrado um user com o id: ${id}`,
                        HttpStatus.NOT_FOUND,
                  );

            return user;
      }

      async update(id: number,  data: UpdateLoanDto) {
            const userIdLoan = await this.loanRepository.findById(Id);

            return await this.userRepository.update(
                  Object.assign(userIdLoan, { ...userIdLoan, ...data }),
            );
      }

      async remove(id: number) {
            return `This action removes a #${id} loan`;
      }
}
