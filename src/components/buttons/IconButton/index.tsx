import { FC } from 'react';

import Image from 'next/image';

import styles from './styles.module.scss';

interface IndexProps {
  onClick: any;
  icon: any;
}

const IconButton: FC<IndexProps> = ({ onClick, icon }) => {
  return (
    <div onClick={onClick} className={styles.iconButtonContainer}>
      <Image width={24} height={24} alt={'icon'} src={icon}></Image>
    </div>
  );
};

export { IconButton };
