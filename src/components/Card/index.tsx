import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface CardProps {
  children?: ReactNode;
  padding: number;
}

const Card: FC<CardProps> = ({ children, padding }) => {
  return (
    <div style={{ padding: padding }} className={styles.contentCardContainer}>
      {children}
    </div>
  );
};

export { Card };
