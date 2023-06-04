import { faker } from '@faker-js/faker';

import { delay } from '@helpers/delay';

interface getSessionProps {
  year: number;
  semester: number;
}

export const getSession =
  ({}: getSessionProps) =>
  async () => {
    return delay(parseInt(process.env.DELAY || '0')).then(() => {
      return [1, 2, 3, 4, 5].map(
        () =>
          ({
            mark: 1,
            subject: faker.hacker.abbreviation(),
            name: faker.person.fullName(),
            typeOfControl: 'exam',
            typeInfo: 'main',
            status: '',
            date: new Date(),
          } as Session)
      );
    });
  };
