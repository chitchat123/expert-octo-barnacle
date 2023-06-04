import React, { ReactNode, Suspense } from 'react';

import { cookies } from 'next/headers';

import Loading from '@components/Loader';

import { GridTable, RightBoard } from '@components';
import { delay } from '@helpers/delay';
import { apiCallBoard } from '@helpers/queries';

import styles from './styles.module.scss';

interface PageProps {}

export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<ReactNode> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    throw new Error();
  }

  const { data } = await apiCallBoard(token.value || '', 1, 4);
  // noinspection ES6MissingAwait
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.mainContent}>
        <Suspense fallback={<Loading />}>
          {/*@ts-ignore*/}
          <GridTable data={delay(2000)} />
        </Suspense>
        <RightBoard news={data} />
      </div>
    </div>
  );
};

export default Page;
