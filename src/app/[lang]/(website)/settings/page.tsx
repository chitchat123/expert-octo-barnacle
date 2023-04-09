'use client';
import React, { FC } from 'react';

import { Button } from '@components/Button';
import ImageFrame from '@components/ImageFrame';

import styles from './styles.module.scss';

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          <ImageFrame />
          <div className={styles.buttons}>
            <Button variant={'black'}>Upload</Button>
            <Button>Delete</Button>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>Settings</h2>
    </div>
  );
};

export default Settings;
