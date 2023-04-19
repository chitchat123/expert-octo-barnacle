import React from 'react';

import { Table, TableContent } from '@components';
import { getStudySheet } from '@helpers/queries/getStudySheets';

import styles from './styles.module.scss';

interface StudySheetProps {}

const StudySheet = async ({}: StudySheetProps) => {
  const data = await getStudySheet({
    year: 1,
    semester: 1,
  })();
  return (
    <div className={styles.studySheetContainer}>
      {' '}
      <Table type={'studysheet'}>
        <TableContent type={'studysheet'} content={data.occurrences} />
      </Table>{' '}
    </div>
  );
};

export default StudySheet;
