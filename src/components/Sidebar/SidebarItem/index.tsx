'use client';
import React, { FC, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

const SidebarItem: FC<SidebarItemProps> = ({
  item: { type, href, title, icon },
  state,
  downItem,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [state]);

  const content = (
    <div className={styles.appear}
    >
      <Image src={icon} alt={'icon'}></Image> <p>{state ? title : ''}</p>
    </div>
  );

  return (
    <>
      <Link className={styles.simple} href={`/${href}`}>
        {content}
      </Link>
    </>
  );
};

export { SidebarItem };
