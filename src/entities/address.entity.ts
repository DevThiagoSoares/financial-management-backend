import { v4 as uuid } from 'uuid';

export class Address {
      id?: string;
      street: string;
      district: string;
      number: string;
      city: string;
      userId: number;
      createdAt: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<Address, 'id' | 'createdAt' | 'userId'>,
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id ?? uuid();
      }
}
