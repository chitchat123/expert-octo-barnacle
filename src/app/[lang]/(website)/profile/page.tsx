import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button, Card } from '@components';
import { getProfile } from '@helpers/queries/getProfile';
import settingsIco from 'public/icons/settings.svg';

import styles from './styles.module.scss';

interface SettingsProps {}

const Profile = async ({}: SettingsProps) => {
  const profile = await getProfile();
  return (
    <Card className={styles.profileContainer} padding={32}>
      <div className={styles.personalInfo}>
        <div className={styles.image}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              'https://images.pexels.com/photos/14080409/pexels-photo-14080409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            alt={'personal'}></img>
        </div>
        <div className={styles.fullName}>
          <h3>Томас Андерсон</h3>
          <h5 className={styles.coloredText}>Студент</h5>
          <p>Логін</p>
          <h5 className={styles.coloredText}>siv19292</h5>
        </div>
        <div className={styles.regButton}>
          <Link href={'/settings'}>
            <Button type='button' size={'small'}>
              <div style={{ display: 'flex', gap: 6 }}>
                <Image src={settingsIco} alt='icon' />
                <div>Налаштування</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.userDescription}>
        <h4 className={styles.divider}>Опис</h4>
        <p className={styles.blockTitle}>Контакти</p>
        <table className={styles.userInfoTable}>
          <tbody className={styles.info}>
            {profile.contacts.map((el, idx) => (
              <tr className={styles.block} key={idx}>
                <td className={styles.infoKey}>
                  <h5>{el.type}</h5>
                </td>
                <td className={styles.infoValue}>
                  <h5>{el.val}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.blockTitle}>Місце навчання (Роботи)</p>
        <table className={styles.userInfoTable}>
          <tbody className={styles.info}>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Підрозділ:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.institute}</h5>
              </td>
            </tr>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Група:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.group}</h5>
              </td>
            </tr>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Форма навчання:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.studyForm}</h5>
              </td>
            </tr>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Курс навчання:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.course}</h5>
              </td>
            </tr>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Спеціальність:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.profile}</h5>
              </td>
            </tr>
            <tr className={styles.block}>
              <td className={styles.infoKey}>
                <h5>Статус:</h5>
              </td>
              <td className={styles.studyPlace}>
                <h5>{profile.profile.status}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Profile;
