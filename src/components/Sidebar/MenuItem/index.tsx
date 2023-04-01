import React, { FC } from 'react';

import Link from 'next/link';

import { MenuItemProps } from '@components/Sidebar/MenuItem/type';

import styles from './styles.module.scss';

const testData = {
  '2021': ['1 semester', '2 semester'],
  '2022': ['1 semester', '2 semester'],
  '2023': ['1 semester'],
};
const MenuItem: FC<MenuItemProps> = ({ href }) => {
  return (
    <div className={styles.container}>
      {Object.entries(testData).map(([year, semesters], key) => (
        <div key={key}>
          <span className={styles.year}>{year}</span>
          {semesters.map((semester, key) => (
            <div className={styles.semester} key={key}>
              <Link href={`/${href}/${year}/${semester[0]}`}>{semester}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { MenuItem };
