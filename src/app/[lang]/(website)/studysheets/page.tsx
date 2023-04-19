import React from 'react';

import { Table, TableContent } from '@components';
import { getStudySheets } from '@helpers/queries/getStudySheets';

import styles from './styles.module.scss';

interface StudySheetProps {}

const StudySheet = async ({}: StudySheetProps) => {
  const data = await getStudySheets({
    year: 1,
    semester: 1,
  })();
  return (
    <div className={styles.studySheetContainer}>
      {' '}
      <Table type={'studysheets'}>
        <TableContent type={'studysheets'} content={data} />
      </Table>{' '}
    </div>
  );
};

export default StudySheet;
