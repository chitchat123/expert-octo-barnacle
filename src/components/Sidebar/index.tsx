'use client';
import { FC, useState } from 'react';

import { Button } from '@components/Button';
import { SidebarProps } from '@components/Sidebar/type';

import { DictionarySide } from '@helpers/dictionary';

import styles from './styles.module.scss';

const getListItems = (dict: DictionarySide) => [
  {
    title: dict.session,
    href: '/session',
  },
  {
    title: dict.attestation,
    href: '/attestation',
  },
];
const Sidebar: FC<SidebarProps> = ({ dictionary }) => {
  const menu = getListItems(dictionary);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${isOpen ? styles.open : styles.close} ${styles.constant}`}>
      <div className={styles.sideBarContainer}>
        {<Button onClick={() => setIsOpen(!isOpen)}>click</Button>}
        {menu.map((el, id) => (
          <h3 key={id}>{el.title}</h3>
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
