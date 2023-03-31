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
        <div
          style={{ transition: 'all', transitionDelay: '300' }}
          onClick={() => setOpen(!open)}>
          <h3 className={styles.menulist}>
            {icon}
            {state ? <div className={styles.simple}>{title}</div> : ''}
          </h3>
          <div
            style={
              open
                ? { display: 'none', opacity: 0 }
                : { display: 'block', opacity: 1 }
            }>
            <MenuItem href={href} />
          </div>
        </div>
      );
    case 'simple':
    default:
      return (
        <h3>
          {icon}
          {state ? (
            <Link className={styles.simple} href={`/${href}`}>
              {title}
            </Link>
          ) : (
            ''
          )}
        </h3>
      );
  }
};

export { SidebarItem };
