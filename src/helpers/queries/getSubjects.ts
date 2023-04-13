import { faker } from '@faker-js/faker';

export const getSubjects = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {})
    .then(res => res.json())
    .then(() => {
      return [1, 2, 3, 4, 5].map(
        () =>
          ({
            name: faker.hacker.phrase(),
            teacher: faker.name.fullName(),
            total: faker.datatype.number({ min: 20, max: 100 }),
            occurrences: [],
          } as Lesson)
      );
    });
};
