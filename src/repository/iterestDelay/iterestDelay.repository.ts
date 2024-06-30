import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/database/prisma.service';
import { IterestDelay } from 'src/entities/iterestDelay.entity';
import IIterestDelayRepository from './iterestDelay.repository.contract';

@Injectable()
export class IterestDelayRepository implements IIterestDelayRepository {
      constructor(private readonly repository: PrismaService) {}
      
      async findById(id: string): Promise<IterestDelay> {
            return await this.repository.iterestDelay.findUnique({
                  where: {
                        id,
                  },
            });
      }

     async  create(data: IterestDelay): Promise<IterestDelay> {
            return await this.repository.iterestDelay.create({
                  data: {
                        id: data.id,
                        value: data.value,
                        payDay: data.payDay,
                        paymentId: data.paymentId,                        
                  },
            });
      }

      async update(id: string, data: IterestDelay): Promise<IterestDelay> {
            return await this.repository.iterestDelay.update({
                  where: {
                        id
                  },
                  data
            })
      }
}
