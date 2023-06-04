import React, { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

const SidebarItem: FC<SidebarItemProps> = ({
  item: { href, title, icon },
  state,
}) => {
  const content = (
    <div className={styles.appear}>
      <Image src={icon} alt={'icon'}></Image> <p>{state ? title : ''}</p>
    </div>
  );

  return (
    <>
      {href ? (
        <Link className={styles.simple} href={`/${href}`}>
          {content}
        </Link>
      ) : (
        <div className={styles.simple}>{content}</div>
      )}
    </>
  );
};

export { SidebarItem };
