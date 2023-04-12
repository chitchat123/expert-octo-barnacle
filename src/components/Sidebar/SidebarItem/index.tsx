'use client';
import React, { FC, useEffect, useState } from 'react';

import Link from 'next/link';

import { MenuItem } from '@components/Sidebar/MenuItem';
import { SidebarItemProps } from '@components/Sidebar/SidebarItem/type';

import styles from './index.module.scss';

const SidebarItem: FC<SidebarItemProps> = ({
  item: { type, href, title, icon },
  state,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [state]);

  const content = (
    <div className={styles.appear}>
      {icon} <span>{state ? title : ''}</span>
    </div>
  );

  switch (type) {
    case 'menu':
      return (
        <div>
          <div
            className={styles.simple}
            {...(state ? { onClick: () => setOpen(!open) } : {})}>
            {content}
          </div>
          {open ? <MenuItem href={href} /> : null}
        </div>
      );
    case 'simple':
    default:
      return (
        <Link className={styles.simple} href={`/${href}`}>
          {content}
        </Link>
      );
  }
};

export { SidebarItem };
