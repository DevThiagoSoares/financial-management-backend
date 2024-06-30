import { IterestDelay } from 'src/entities/iterestDelay.entity';

export default interface IIterestDelayRepository {
      create(data: IterestDelay): Promise<IterestDelay>;
      findById(id: string): Promise<IterestDelay | null>;
      update(id: string, data: IterestDelay): Promise<IterestDelay>;
}
