import React, { FC } from 'react';

import styles from './styles.module.scss';

interface CuratorProps {}

const Curator: FC<CuratorProps> = ({}) => {
  return <div className={styles.curatorContainer}> Curator </div>;
};

export default Curator;
