'use client';
import { FC, useState } from 'react';

import Image from 'next/image';
import { BsEarbuds } from 'react-icons/bs';

import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { getListItemsType, SidebarProps } from '@components/Sidebar/type';

import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const getListItems: getListItemsType = dict => [
  {
    title: dict.main,
    href: 'dashboard',
    icon: <BsEarbuds />,
  },
  {
    title: dict.control,
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
    title: dict.session,
    href: 'session',
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
    <div className={`${isOpen ? styles.open : ''} ${styles.constant}`}>
      <div className={styles.sideBarContainer}>
        <Image
          src={'/icons/menu.svg'}
          alt={''}
          width={20}
          height={20}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div>
          {menu.map((item, id) => (
            <SidebarItem key={id} item={item} state={isOpen} />
          ))}
        </div>
        <div>
          <SidebarItem
            item={{
              title: 'Розклад занять',
              href: 'dashboard',
              icon: <BsEarbuds />,
            }}
            state={isOpen}
          />
          <SidebarItem
            item={{
              title: 'Українська',
              href: 'dashboard',
              icon: <BsEarbuds />,
            }}
            state={isOpen}
          />
          <SidebarItem
            item={{
              title: 'Поширені запитання',
              href: 'dashboard',
              icon: <BsEarbuds />,
            }}
            state={isOpen}
          />
        </div>
        <div>
          <Button onClick={() => null}>Exit</Button>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
