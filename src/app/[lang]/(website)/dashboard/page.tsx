import React from 'react';

import { cookies } from 'next/headers';

import { delay } from '@helpers/delay';
import { apiCallUser } from '@helpers/getUserInfo';

import styles from './styles.module.scss';

interface PageProps {}
export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<JSX.Element> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const { fullName } = await apiCallUser(token);
  console.info(fullName, 'data');
  await delay(2000);

  return (
    <div className={styles.container}>
      <h1>{fullName}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}>
        {/*<Suspense fallback={<Loading />}>*/}
        {/*  <TestLoading>test</TestLoading>*/}
        {/*</Suspense>{' '}*/}
        {/*<Suspense fallback={<Loading />}>*/}
        {/*  <TestLoading>test</TestLoading>*/}
        {/*</Suspense>*/}
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
