import { FC } from 'react';

import styles from './index.module.scss';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
