import { faker } from '@faker-js/faker';

interface getStudySheetProps {
  year: number;
  semester: number;
}

export const getStudySheets =
  ({}: getStudySheetProps) =>
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then(res => res.json())
      .then(() => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 22, 1, 1, 1, 1, 11].map(
          () =>
            ({
              id: faker.datatype.uuid(),
              name: faker.name.fullName(),
              subject: faker.hacker.abbreviation(),
              total: faker.datatype.number({ min: 12, max: 99 }),
            } as Lesson)
        );
      });
  };

export const getStudySheet =
  ({}: getStudySheetProps) =>
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then(res => res.json())
      .then(
        () =>
          ({
            id: faker.datatype.uuid(),
            name: faker.name.fullName(),
            subject: faker.hacker.abbreviation(),
            total: faker.datatype.number({ min: 12, max: 99 }),
            occurrences: [1, 2, 3].map(() => ({
              teacher: faker.name.fullName(),
              date: new Date(),
              mark: faker.datatype.number({ min: 0, max: 5 }),
            })),
          } as Lesson)
      );
  };
