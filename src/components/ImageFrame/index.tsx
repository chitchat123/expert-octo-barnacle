import React, { FC } from 'react';

import styles from './styles.module.scss';

interface IndexProps {
  imageUrl?: string;
}

const Index: FC<IndexProps> = ({ imageUrl }) => {
  return (
    <div className={styles.imageFrameContainer}>
      <img
        alt={'r'}
        src={
          imageUrl ||
          'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'
        }
      />
    </div>
  );
};

export default Index;
