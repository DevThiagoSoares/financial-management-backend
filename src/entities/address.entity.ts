import { Prisma } from "@prisma/client";

export class Address implements Prisma.AddressUncheckedCreateInput {
    id?: number;
    street: string;
    district: string;
    number: string;
    city: string;
    userId: number;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}