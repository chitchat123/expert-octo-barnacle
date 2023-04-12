import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface CardProps {
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.contentCardContainer}>{children}</div>;
};

export { Card };
