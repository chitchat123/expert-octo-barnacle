'use client';
import React, { FC, useState } from 'react';

import Link from 'next/link';

import { MenuItem } from '@components/Sidebar/MenuItem';
import { SidebarItemProps } from '@components/Sidebar/SidebarItem/type';

import styles from './index.module.scss';

const SidebarItem: FC<SidebarItemProps> = ({
  type,
  href,
  title,
  icon,
  state,
}) => {
  const [open, setOpen] = useState(false);
  switch (type) {
    case 'menu':
      return (
        <div onClick={() => setOpen(!open)}>
          <div className={styles.menu}>
            <div>{icon}</div>
            {state ? <div>{title}</div> : ''}
          </div>
          {state ? (
            <div style={open ? { display: 'none' } : { display: 'block' }}>
              <MenuItem href={href} />
            </div>
          ) : null}
        </div>
      );
    case 'simple':
    default:
      return (
        <div className={styles.simple}>
          {icon}
          {state ? <Link href={`/${href}`}>{title}</Link> : ''}
        </div>
      );
  }
};

export { SidebarItem };
