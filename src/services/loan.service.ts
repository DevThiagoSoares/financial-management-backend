import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Loan } from 'src/entities/loan.entity';
import ILoanRepository from 'src/repository/loan/loan.repository.contract';
import { DueDateType } from 'src/utils/ETypes';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';
import { ClientService } from './client.service';
import * as moment from 'moment';

@Injectable()
export class LoanService {
      constructor(
            @Inject('ILoanRepository')
            private readonly loanRepository: ILoanRepository,
            private readonly clientService: ClientService,
      ) {}

      async create(payload: CreateLoanDto, clientId: string) {
            const client = await this.clientService.listById(clientId);

            const startDate = new Date();

            const dueDate =
                  payload.dueDate == DueDateType.ONE_WEEK
                        ? moment(startDate).add(1, 'week').toDate()
                        : moment(startDate).add(1, 'month').toDate();

            console.log({ startDate, dueDate });
            const loan = new Loan(payload, startDate, dueDate);

            return this.loanRepository.create(loan, client.id);
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
