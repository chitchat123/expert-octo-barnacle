import { faker } from '@faker-js/faker';

import { delay } from '@helpers/delay';

interface getStudySheetProps {
  year: number;
  semester: number;
}

export const getStudySheets =
  ({}: getStudySheetProps) =>
  async () => {
    return delay(parseInt(process.env.DELAY || '0')).then(() => {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 22, 1, 1, 1, 1, 11].map(
        () =>
          ({
            id: faker.string.uuid(),
            teacher: faker.person.fullName(),
            subject: faker.hacker.abbreviation(),
            total: faker.number.int({ min: 12, max: 99 }),
          } as Lesson)
      );
    });
  };

export const getStudySheet =
  ({}: getStudySheetProps) =>
  async () => {
    return delay(parseInt(process.env.DELAY || '0')).then(
      () =>
        ({
          id: faker.string.uuid(),
          teacher: faker.person.fullName(),
          subject: faker.hacker.abbreviation(),
          total: faker.number.int({ min: 12, max: 99 }),
          occurrences: [1, 2, 3].map(() => ({
            teacher: faker.person.fullName(),
            date: new Date(),
            mark: faker.number.int({ min: 0, max: 5 }),
          })),
        } as Lesson)
    );
  };
