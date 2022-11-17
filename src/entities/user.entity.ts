import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
      id?: number;
      name: string;
      fone: string;
      address?: Prisma.AddressUncheckedCreateNestedOneWithoutUserInput;
      loan?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
      createdAt?: string | Date;
      updatedAt?: string | Date;
}
