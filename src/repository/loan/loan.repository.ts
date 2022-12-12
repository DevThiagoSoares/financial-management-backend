// import { Injectable } from '@nestjs/common';
// import { Pageable } from '../../config/database/pageable.service';
// import { PrismaService } from '../../config/database/prisma.service';
// import ILoanRepository from './loan.repository.contract';
// import { Loan } from '../../entities/loan.entity';

// @Injectable()
// export class LoanRepository extends Pageable<Loan> implements ILoanRepository {
//     //   constructor(private readonly repository: PrismaService) {
//     //         super();
//     //   }
//     //   delete(id: number): Promise<Loan[]> {
//     //         throw new Error('Method not implemented.');
//     //   }
//     //   findById(id: number): Promise<Loan[]> {
//     //         throw new Error('Method not implemented.');
//     //   }
//     //   update(data: Loan[]): Promise<Loan[]> {
//     //         throw new Error('Method not implemented.');
//     //   }

//     //   create(data: Loan): Promise<Loan> {
//     //         return this.repository.loan.create({
//     //               data: {
//     //                     value_loan: data.value_loan,
//     //               },
//     //         });
//     //   }
// }
