import { FC } from 'react';

import { CuratorItemProps } from '@components/СuratorItem/type';

import styles from './styles.module.scss';

const CuratorItem: FC<CuratorItemProps> = ({ name, group, department }) => {
  return (
    <div className={styles.curatorContainer}>
      <div>{group}</div>
      <div>{name}</div>
      <div>{department}</div>
    </div>
  );
};

export default CuratorItem;
