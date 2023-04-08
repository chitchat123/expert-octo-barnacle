import React, { Suspense } from 'react';

import { cookies } from 'next/headers';

import { ContentCard } from '@components/ContentCard';
import { GridTable } from '@components/GridTable';
import Loading from '@components/Loader';

import { delay } from '@helpers/delay';
import { apiCallUser } from '@helpers/getUserInfo';

import styles from './styles.module.scss';

interface PageProps {}

export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<JSX.Element> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const { fullName } = await apiCallUser(token);
  await delay(1000);

  return (
    <div className={styles.container}>
      {/*<h1>Вітаємо, {fullName}</h1>*/}
      <div className={styles.mainContent}>
        <div className={styles.currentSemester}>
          <h3 className={styles.title}>Current semester</h3>
          <Suspense fallback={<Loading />}>
            {/*@ts-ignore*/}
            <GridTable data={delay(2000)} />
          </Suspense>
        </div>
        <div className={styles.news}>
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
