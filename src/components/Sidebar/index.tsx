'use client';
import { FC, useState } from 'react';

import { BsEarbuds } from 'react-icons/bs';

import { Button } from '@components/Button';
import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { getListItemsType, SidebarProps } from '@components/Sidebar/type';

import styles from './styles.module.scss';

const getListItems: getListItemsType = dict => [
  {
    title: dict.session,
    href: 'attestation',
    type: 'menu',
    icon: <BsEarbuds />,
  },
  {
    title: dict.attestation,
    href: 'attestation',
    type: 'menu',
    icon: <BsEarbuds />,
  },
  {
    title: 'Text',
    href: 'attestation',
    icon: <BsEarbuds />,
  },
  {
    title: 'Profile',
    href: 'profile',
    icon: <BsEarbuds />,
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
        {menu.map((item, id) => (
          <SidebarItem key={id} item={item} state={isOpen} />
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
