import { FC } from 'react';

import { CuratorItemProps } from '@components/СuratorItem/type';

import styles from './styles.module.scss';

const CuratorItem: FC<CuratorItemProps> = ({ name, group, department }) => {
  return (
    <div className={styles.curatorContainer}>
      <div className={styles.group}>{group}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.department}>{department}</div>
    </div>
  );
};

export default CuratorItem;
