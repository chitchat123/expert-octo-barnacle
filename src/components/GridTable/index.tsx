import { faker } from '@faker-js/faker';

import { SubjectCard } from '@components/SubjectCard';

import styles from './styles.module.scss';

const GridTable: ({
  data,
}: {
  data: Promise<any>;
}) => Promise<JSX.Element> = async ({ data }) => {
  const res = await data.then(res => [1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className={styles.subjects}>
      {res.map((el, key) => (
        <SubjectCard
          subject={{
            name: faker.hacker.phrase(),
            teacher: faker.name.fullName(),
            total: faker.datatype.number({ min: 20, max: 100 }),
            occurrences: [],
          }}
          key={key}
        />
      ))}
    </div>
  );
};
export { GridTable };
