'use client';
import React, { FC, useState } from 'react';

import Image from 'next/image';

import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { getListItemsType, SidebarProps } from '@components/Sidebar/type';

import current from 'public/icons/sidebar/book open.svg';
import calendar from 'public/icons/sidebar/calendaar.svg';
import attestation from 'public/icons/sidebar/check.svg';
import dashboard from 'public/icons/sidebar/grid.svg';
import session from 'public/icons/sidebar/grid.svg';
import logout from 'public/icons/sidebar/log out.svg';
import menuIco from 'public/icons/sidebar/menu.svg';
import quations from 'public/icons/sidebar/quations.svg';
import news from 'public/icons/sidebar/Speaker.svg';

import { LangChanger } from '../LangChanger/index';

import styles from './styles.module.scss';

const getListItems: getListItemsType = dict => [
  {
    title: dict.main,
    href: 'dashboard',
    icon: dashboard,
  },
  {
    title: dict.control,
    href: 'studysheet',
    icon: current,
  },
  {
    title: dict.attestation,
    href: 'attestation',
    icon: attestation,
  },
  {
    title: dict.session,
    href: 'session',
    icon: session,
  },
  {
    title: dict.news,
    href: 'news',
    icon: news,
  },
];

const Sidebar: FC<SidebarProps> = ({ dictionary, lang }) => {
  const menu = getListItems(dictionary);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`${isOpen ? styles.open : ''} ${styles.constant}`}>
      <div className={styles.sideBarContainer}>
        <Image
          className={styles.menuIco}
          alt={'menu'}
          src={menuIco}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={styles.sideBarItems}>
          {menu.map((item, id) => (
            <SidebarItem key={id} item={item} state={isOpen} />
          ))}
        </div>
        <div className={styles.sideBarItems}>
          <SidebarItem
            downItem
            item={{
              title: 'Розклад занять',
              href: 'dashboard',
              icon: calendar,
            }}
            state={isOpen}
          />
          <LangChanger state={isOpen} currLocale={lang} />
          <SidebarItem
            downItem
            item={{
              title: 'Поширені запитання',
              href: 'dashboard',
              icon: quations,
            }}
            state={isOpen}
          />
        </div>
        <div style={{ width: '100%' }}>
          <SidebarItem
            item={{
              title: 'Вихід',
              href: 'logout',
              icon: logout,
            }}
            state={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
