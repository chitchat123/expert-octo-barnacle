'use client';
import React, { FC } from 'react';

import { Button } from '@components/Button';

import styles from './styles.module.scss';

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileView}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <img
              alt={'r'}
              src={
                'https://images.pexels.com/photos/6872161/pexels-photo-6872161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            />
          </div>
          <div className={styles.underImagefield}>
            <div className={styles.field}>d</div>
            <div className={styles.field}>d</div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainerFields}>
            <div className={styles.field}>d</div>
            <div className={styles.field}>d</div>
            <div className={styles.field}>d</div>
            <div className={styles.field}>d</div>
            <div className={styles.field}>d</div>
          </div>
          <Button
            variant={'secondary'}
            onClick={() => console.info('go to setings')}>
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
