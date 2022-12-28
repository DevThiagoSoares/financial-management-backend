import { v4 as uuid } from 'uuid';

export class User {
      id: string;
      name: string;
      login: string;
      password: string;
      isAdm: boolean;
      createdAt: Date;
      updatedAt?: Date | null;

      constructor(props: Omit<User, 'id' | 'createdAt'>, id?: string) {
            Object.assign(this, props);
            this.id = id ?? uuid();
      }
}
