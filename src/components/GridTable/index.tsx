import React from 'react';

import Image from 'next/image';

import { SubjectCard } from '@components/SubjectCard';

import { getSubjects } from '@helpers/queries/getSubjects';
import book from 'public/icons/dashboard/book open.svg';

import styles from './styles.module.scss';

const GridTable: ({
  data,
}: {
  data: Promise<any>;
}) => Promise<JSX.Element> = async () => {
  const res = await getSubjects();

  return (
    <div className={styles.currentSemester}>
      <div className={styles.title}>
        <Image src={book} alt={'alt'}></Image>
        <h4>Поточний семестр</h4>
      </div>
      <div className={styles.subjects}>
        {res.map((el, key) => (
          <SubjectCard href={`studysheet/${el.id}`} subject={el} key={key} />
        ))}
      </div>
    </div>
  );
};
export { GridTable };
