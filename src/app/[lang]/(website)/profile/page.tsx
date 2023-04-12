'use client';
import React, { FC } from 'react';

import { useRouter } from 'next/navigation';

import ImageFrame from '@components/ImageFrame';

import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

interface SettingsProps {}

const Profile: FC<SettingsProps> = ({}) => {
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  // if (loading) return <Loading />; if get user info req is pending
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileView}>
        <div className={styles.leftContainer}>
          <ImageFrame />
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
            onClick={() => router.push('/settings')}>
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
