import React from 'react';

import { Table, TableContent } from '@components';
import { getSession } from '@helpers/queries/getSession';

import styles from './styles.module.scss';

interface SessionProps {}

const Session = async ({}: SessionProps) => {
  const data = await getSession({
    year: 1,
    semester: 1,
  })();
  return (
    <div className={styles.sessionContainer}>
      <Table type={'session'}>
        <TableContent type={'session'} content={data} />
      </Table>
    </div>
  );
};

export default Session;
