import { SubjectCard } from '@components/SubjectCard';

import { getSubjects } from '@helpers/queries/getSubjects';

import styles from './styles.module.scss';

const GridTable: ({
  data,
}: {
  data: Promise<any>;
}) => Promise<JSX.Element> = async () => {
  const res = await getSubjects();

  return (
    <div className={styles.subjects}>
      {res.map((el, key) => (
        <SubjectCard subject={el} key={key} />
      ))}
    </div>
  );
};
export { GridTable };
