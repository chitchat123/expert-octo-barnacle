import React, { FC } from 'react';

import Table from '@components/Table';

import styles from './styles.module.scss';

export const generateStaticParams = async () => {
  return [['2021', '1']].map(([year, semester]) => ({
    year: year,
    semester: semester,
  }));
};

interface PageProps {
  params: {
    year: string;
    semester: string;
  };
}

const Page: FC<PageProps> = ({ params: { year, semester } }) => {
  return (
    <div className={styles.container}>
      <h1>{`${year} ${semester} semester`}</h1>
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
        titles={['Name', 'Date', 'Mark']}
      />
    </div>
  );
};

export default Page;
