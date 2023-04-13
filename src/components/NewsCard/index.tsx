import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Card } from '@components';

interface NewsCardProps {
  href?: string;
  title: string;
  description: string;
}


const NewsCard: FC<NewsCardProps> = ({ href, title, description }) => {
  const formattedContent = description.split('<br />').map(part => part.replace('<br />', ''));
  return (
    <Link href={`/${href}`}>
      <Card padding={10}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {formattedContent.map(line => (
            <div className={styles.description}>{line}</div>
          ))}
        </div>
      </Card>
    </Link>
  );
};

export { NewsCard };
