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
  await delay(1000);
  return <div className={styles.container}>{fullName}</div>;
};

export default Page;
