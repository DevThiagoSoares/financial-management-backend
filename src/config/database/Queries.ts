import { convertAndVerifyNumber } from '../../utils/Utils';
import { IQueryUser } from '../../dto/user/queryUser';
import { FiltersUserDTO } from 'src/dto/user/filterUser.dto';

export function generateQueryByFiltersForUser(
      filters: FiltersUserDTO,
): IQueryUser {
      const fields = {
            name: () => ({
                  name: filters.name,
            }),
            fone: () => ({
                  fone: filters.fone,
            }),
            address: () => ({
                  address: filters.address,
            }),
            loan: () => ({
                  loan: filters.loan,
            }),
      };

      const keysFields = Object.keys(fields);

      let query: any;

      let queryBuilder: Function;

      for (const filter in filters) {
            if (keysFields.includes(filter)) {
                  queryBuilder = fields[filter];

                  if (query) {
                        const newCondition = queryBuilder();

                        Object.assign(query, { ...newCondition });
                  } else {
                        query = queryBuilder();
                  }
            }
      }

      return query;
}
