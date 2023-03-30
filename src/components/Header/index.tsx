import React, { FC } from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { MdCircleNotifications } from 'react-icons/md';

import { Button } from '@components/Button';

import styles from './styles.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>logo</h3>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Button variant={'secondary'}>Поточний кампус</Button>
        </div>
        <FaUserCircle fill={'#18A0FB'} size={60} />
        <MdCircleNotifications fill={'#18A0FB'} size={60} />
      </div>
    </div>
  );
};

export { Header };
