import React from 'react';

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
    <div className={styles.currentSemester}>
      <h3 className={styles.title}>Current semester</h3>
      <div className={styles.subjects}>
        {res.map((el, key) => (
          <SubjectCard href={`studysheet/${el.id}`} subject={el} key={key} />
        ))}
      </div>
    </div>
  );
};
export { GridTable };
