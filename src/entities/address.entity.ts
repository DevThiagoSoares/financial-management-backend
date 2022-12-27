import { v4 as uuid } from 'uuid';
export class Address {
      id: string;
      street: string;
      district: string;
      number: string;
      city: string;
      clientId: string;
      createdAt: Date;
      updatedAt?: Date | null;
      constructor(
            props: Omit<Address, 'id' | 'createdAt' | 'clientId'>,
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id ?? uuid();
      }
}
