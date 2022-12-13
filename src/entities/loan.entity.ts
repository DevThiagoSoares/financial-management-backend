export class Loan {
      id?: number;
      value_loan: number;
      userId?: number;

      constructor(
            props: Omit<Loan, 'id'>,
            id?: number,
            value_loan?: number,
            userId?: number,
      ) {
            Object.assign(this, props);
            this.id = id;
            this.userId = userId;
            this.value_loan = value_loan;
      }
}
