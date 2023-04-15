import { FC } from 'react';

import Link from 'next/link';

import { Card } from '@components';

import styles from './styles.module.scss';

interface NewsCardProps {
  href?: string;
  title: string;
  description: string;
}

const NewsCard: FC<NewsCardProps> = ({ href, title, description }) => {
  const formattedContent = description
    .split('<br />')
    .map(part => part.replace('<br />', ''));
  return (
    <Link href={`/${href}`}>
      <Card padding={'1.2rem 3.6rem 1.2rem 3.2rem'} className={styles.newsCard}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {formattedContent.map((line, idx) => (
            <div key={idx} className={styles.description}>
              {line}
            </div>
          ))}
        </div>
      </Card>
    </Link>
  );
};

export { NewsCard };
