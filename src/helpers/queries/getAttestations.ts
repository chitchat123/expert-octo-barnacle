import { faker } from '@faker-js/faker';

interface getAttestationProps {
  year: number;
  semester: number;
}

export const getAttestations =
  ({}: getAttestationProps) =>
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then(res => res.json())
      .then(() => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 22, 1, 1, 1, 1, 11].map(
          () =>
            ({
              subject: faker.hacker.abbreviation(),
              name: faker.name.fullName(),
              first: faker.datatype.boolean(),
              second: faker.datatype.boolean(),
            } as Attestation)
        );
      });
  };
