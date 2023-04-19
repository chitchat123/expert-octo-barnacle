import { faker } from '@faker-js/faker';

interface getSessionProps {
  year: number;
  semester: number;
}

export const getSession =
  ({}: getSessionProps) =>
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then(res => res.json())
      .then(() => {
        return [1, 2, 3, 4, 5].map(
          () =>
            ({
              mark: 1,
              subject: faker.hacker.abbreviation(),
              name: faker.name.fullName(),
              typeOfControl: 'exam',
              typeInfo: 'main',
              status: '',
              date: new Date(),
            } as Session)
        );
      });
  };
