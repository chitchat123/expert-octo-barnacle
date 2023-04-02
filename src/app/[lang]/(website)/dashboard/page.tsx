import { cookies } from 'next/headers';

import { delay } from '@helpers/delay';

import styles from './styles.module.scss';

interface PageProps {}
export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<JSX.Element> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const { fullName } = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      token: token?.value || '',
    },
  })
    .then(res => res.json())
    .then(data => data.user)
    .catch(err => {
      throw new Error('could not get user info', err);
    });

  console.info('page', fullName);

  await delay(2000);
  return <div className={styles.container}>{fullName}</div>;
};

export default Page;
