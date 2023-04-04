import React from 'react';

import { cookies } from 'next/headers';

import { ContentCard } from '@components/ContentCard';

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
      <h1>Вітаємо, {fullName}</h1>
      <div className={styles.mainContent}>
        <div className={styles.currentSemester}>
          <h3 className={styles.title}>Current semester</h3>
          <div className={styles.subjects}>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </div>
        <div className={styles.news}>
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    </div>
  );
};

// const TestLoading: ({
//   children,
// }: {
//   children: ReactNode;
// }) => Promise<JSX.Element> = async ({ children }) => {
//   return await delay(2000).then(() => children);
// };

export default Page;
