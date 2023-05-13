import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface CardProps {
  children?: ReactNode;
  padding: number | string;
  className?: string;
}

const Card: FC<CardProps> = ({ children, padding, className }) => {
  return (
    <div
      style={{ padding: padding }}
      className={[styles.contentCardContainer, className || ''].join(' ')}>
      {children}
    </div>
  );
};

export { Card };
