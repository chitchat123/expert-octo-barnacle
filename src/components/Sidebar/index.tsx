'use client';
import React, { FC, useState } from 'react';

import Image from 'next/image';

import { AuthModalButton } from '@components/Modal';
import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { getListItemsType, SidebarProps } from '@components/Sidebar/type';

import {
  attestation,
  calendar,
  current,
  dashboard,
  logout,
  menuIco,
  news,
  question,
  session,
} from '@helpers/images';

// noinspection ES6PreferShortImport
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
    href: 'studysheets',
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
  const menu = getListItems(dictionary.sidebar);

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
          <AuthModalButton dictionary={dictionary}>
            <SidebarItem
              downItem
              item={{
                title: 'Поширені запитання',
                icon: question,
              }}
              state={isOpen}
            />
          </AuthModalButton>
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
