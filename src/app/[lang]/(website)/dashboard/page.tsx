import React, { Suspense } from 'react';

import { cookies } from 'next/headers';

import Loading from '@components/Loader';

import { GridTable, RightBoard } from '@components';
import { delay } from '@helpers/delay';
import { apiCallBoard, apiCallUser } from '@helpers/queries';

import styles from './styles.module.scss';

interface PageProps {}

export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<JSX.Element> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    throw new Error();
  }

  // const { fullName } = await apiCallUser(token.value);
  const { data } = await apiCallBoard(token.value || '', 1, 4);
  const user = apiCallUser(token.value);
  await delay(1000);
  // console.info(user, 'user');

  return (
    <div className={styles.dashboardContainer}>
      {/*<h1>Вітаємо, {fullName}</h1>*/}
      <div className={styles.mainContent}>
        <Suspense fallback={<Loading />}>
          {/*@ts-ignore*/}
          <GridTable data={delay(2000)} />
        </Suspense>
        {/*<div className={styles.news}>*/}
        <RightBoard news={data} />
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Page;
