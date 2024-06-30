import { Inject, Injectable } from '@nestjs/common';
import { IterestDelay } from 'src/entities/iterestDelay.entity';
import IIterestDelayRepository from 'src/repository/iterestDelay/iterestDelay.repository.contract';
@Injectable()
export class IterestDelayService {
      constructor(
            @Inject('IIterestDelayRepository')
            private readonly repository: IIterestDelayRepository,
      ) { }

      async create(data: any) {
            const iterestDelay = await this.repository.create(
                  new IterestDelay(
                        {
                              value: data.value,
                              payDay: data.payDay,
                              paymentId: data.paymentId,
                        },
                  ),
            );
            return iterestDelay;
      }

      async findById(id: string) {
            return this.repository.findById(id);
      }

      async update(id: string, payload: any) {
            return this.repository.update(id, payload);
      }
}
