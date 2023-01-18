import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/database/prisma.service';
import { Payment } from 'src/entities/payment.entity';
import IPaymentRepository from './payment.repository.contract';

@Injectable()
export class PaymentRepository implements IPaymentRepository {
      constructor(private readonly repository: PrismaService) {}
      create(data: Payment, loanId: string): Promise<any> {
            return this.repository.payment.create({
                  data: {
                        id: data.id,
                        value: data.value,
                        loan: {
                              connect: {
                                    id: loanId,
                              },
                        },
                        createdAt: data.createdAt,
                  },
            });
      }
}
