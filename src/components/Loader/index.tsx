import { FC } from 'react';

import styles from './index.module.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
