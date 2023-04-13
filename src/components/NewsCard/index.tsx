import { FC } from 'react';

import Link from 'next/link';

import { Card } from '@components/Card';

import styles from './styles.module.scss';

interface NewsCardProps {
  href?: string;
  title: string;
  description: string;
}

const NewsCard: FC<NewsCardProps> = ({ href, title, description }) => {
  return (
    <Link href={`/${href}`}>
      <Card padding={10}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </Card>
    </Link>
  );
};

export { NewsCard };
