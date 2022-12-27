import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Loan } from 'src/entities/loan.entity';
import ILoanRepository from 'src/repository/loan/loan.repository.contract';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';
import { ClientService } from './client.service';

@Injectable()
export class LoanService {
      constructor(
            @Inject('ILoanRepository')
            private readonly loanRepository: ILoanRepository,
            private readonly clientService: ClientService,
      ) {}

      async create(payload: CreateLoanDto, clientId: string) {
            await this.clientService.listById(clientId);

            const loan = new Loan(payload);

            return this.loanRepository.create(loan, clientId);
      }

      findAll() {
            return `This action returns all loan`;
      }

      async findOne(id: string) {
            const loan = await this.loanRepository.findById(id);

            if (!loan)
                  throw new HttpException(
                        `Não foi encontrado um client com o id: ${id}`,
                        HttpStatus.NOT_FOUND,
                  );
            return loan;
      }

      update(id: string, updateLoanDto: UpdateLoanDto) {
            return `This action updates a #${id} loan`;
      }

      async remove(id: string) {
            await this.findOne(id);
            return await this.loanRepository.delete(id);
      }
}
