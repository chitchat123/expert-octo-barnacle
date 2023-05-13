'use client';
import React, { FC } from 'react';

import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          {/*<ImageFrame />*/}
          <div className={styles.buttons}>
            <Button>Upload</Button>
            <Button>Delete</Button>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>Settings</h2>
    </div>
  );
};

export default Settings;
