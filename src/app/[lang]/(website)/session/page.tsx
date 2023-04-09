import React, { FC } from 'react';

import Table from '@components/Table';

import styles from './styles.module.scss';

interface SessionProps {}

const Session: FC<SessionProps> = ({}) => {
  return (
    <div className={styles.sessionContainer}>
      <Table
        content={[
          {
            mark: 1,
            date: new Date(),
            name: 'rest',
          },
          {
            mark: 1,
            date: new Date(),
            name: 'rest',
          },
          {
            mark: 1,
            date: new Date(),
            name: 'rest',
          },
        ]}
        type={'session'}
        titles={['Name', 'Date', 'Mark']}></Table>
    </div>
  );
};

export default Session;
