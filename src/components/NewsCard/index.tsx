import { FC } from 'react';

import Link from 'next/link';

import { Card } from '@components/Card';

import styles from './styles.module.scss';

interface NewsCardProps {
  href?: string;
  title?: string;
  description?: string;
}

const NewsCard: FC<NewsCardProps> = ({ href, title, description }) => {
  return (
    <Link href={`/${href}`}>
      <Card>
        <div className={styles.content}>
          <div className={styles.title}>
            {title || 'Lorem ipsum dolor sit amet'}
          </div>
          <div className={styles.description}>
            {description ||
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nobis!'}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export { NewsCard };
