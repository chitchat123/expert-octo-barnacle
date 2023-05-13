import { FC } from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <h1 className={styles.hugeTitle}>
          4 <span>0</span> 4
        </h1>
        <p className={styles.hugePar}>
          Сторінка не знайдена <span>:(</span>{' '}
        </p>

        <Link className={styles.link} href={'/en/dashboard'}>
          На головну
        </Link>
      </div>
    </div>
  );
};

export default Page;
