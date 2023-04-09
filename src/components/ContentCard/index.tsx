import { FC } from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

interface ContentCardProps {
  href?: string;
  name?: string;
  description?: string;
}

const ContentCard: FC<ContentCardProps> = ({ href, name, description }) => {
  return (
    <Link className={styles.contentCardContainer} href={`/${href}`}>
      <div className={styles.content}>
        <div className={styles.name}>
          {name || 'Lorem ipsum dolor sit amet'}
        </div>
        <div className={styles.description}>
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nobis!'}
        </div>
      </div>
    </Link>
  );
};

export { ContentCard };
