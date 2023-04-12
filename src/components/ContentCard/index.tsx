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
          <h4> {name || 'Lorem ipsum dolor sit amet'}</h4>
        </div>
        <div className={styles.description}>
          <p>
            {description ||
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nobis!'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export { ContentCard };
