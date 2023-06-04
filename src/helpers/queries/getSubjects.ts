import { faker } from '@faker-js/faker';

import { delay } from '@helpers/delay';

export const getSubjects = async () => {
  return delay(parseInt(process.env.DELAY || '0')).then(() => {
    return [1, 2, 3, 4, 5].map(
      () =>
        ({
          id: faker.string.uuid(),
          subject: faker.hacker.abbreviation(),
          teacher: faker.person.fullName(),
          total: faker.number.int({ min: 20, max: 100 }),
          occurrences: [],
        } as Lesson)
    );
  });
};
