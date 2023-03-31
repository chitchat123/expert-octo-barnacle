import React, { FC } from 'react';

import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdCircleNotifications } from 'react-icons/md';

import { Button } from '@components/Button';
import { ContextMenu } from '@components/ContextMenu';

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
        <ContextMenu>
          <FaUserCircle fill={'#18A0FB'} size={60} />
          <>
            <Link href={'/settings'}> go to</Link>
            <Link href={'/settings'}> go to</Link>
          </>
        </ContextMenu>
        <ContextMenu>
          <MdCircleNotifications fill={'#18A0FB'} size={60} />
          <>
            <Link href={'/settings'}> go to</Link>
            <Link href={'/settings'}> go to</Link>
          </>
        </ContextMenu>
      </div>
    </div>
  );
};

export { Header };
