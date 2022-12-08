import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';

export interface IQueryUser {
      name?: string;
      fone?: string;
      address?: Address;
}
