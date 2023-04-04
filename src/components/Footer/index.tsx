import React, { FC } from 'react';

import ThemeChanger from '@components/ThemeChanger';

import styles from './styles.module.scss';
import { FooterProps } from './type';

const Footer: FC<FooterProps> = ({ fulled }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>left content</div>

      {fulled ? (
        <div>
          {' '}
          <ThemeChanger />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Footer;
