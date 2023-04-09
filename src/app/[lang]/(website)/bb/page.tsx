import React, { FC } from 'react';

import styles from './styles.module.scss';

interface BBProps {}

const BB: FC<BBProps> = ({}) => {
  return <div className={styles.bbContainer}> Bb </div>;
};

export default BB;
