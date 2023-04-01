'use client';
import { FC, useState } from 'react';

import { BsEarbuds } from 'react-icons/bs';

import { Button } from '@components/Button';
import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { SidebarProps } from '@components/Sidebar/type';

import { DictionarySide } from '@helpers/dictionary';

import styles from './styles.module.scss';

const getListItems = (dict: DictionarySide) => [
  {
    title: dict.session,
    href: 'session',
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
    type: 'simple',
    icon: <BsEarbuds />,
  },
];
const Sidebar: FC<SidebarProps> = ({ dictionary }) => {
  const menu = getListItems(dictionary);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? styles.open : styles.close} ${styles.constant}`}>
      <div className={styles.sideBarContainer}>
        {<Button onClick={() => setIsOpen(!isOpen)}>click</Button>}
        {menu.map(({ title, type, href, icon }, id) => (
          <SidebarItem
            icon={icon}
            key={id}
            title={title}
            href={href}
            type={type}
            state={isOpen}
          />
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
