import { faker } from '@faker-js/faker';

import { delay } from '@helpers/delay';

interface getAttestationProps {
  year: number;
  semester: number;
}

export const getAttestations =
  ({}: getAttestationProps) =>
  async () => {
    return delay(parseInt(process.env.DELAY || '0')).then(() => {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 22, 1, 1, 1, 1, 11].map(
        () =>
          ({
            subject: faker.hacker.abbreviation(),
            teacher: faker.person.fullName(),
            first: faker.datatype.boolean(),
            second: faker.datatype.boolean(),
          } as Attestation)
      );
    });
  };
