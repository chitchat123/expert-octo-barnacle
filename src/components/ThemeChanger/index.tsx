'use client';
import { FC, useContext } from 'react';

import { ThemeContext } from '@context';

import styles from './styles.module.scss';

interface ThemeChangerProps {}

const ThemeChanger: FC<ThemeChangerProps> = ({}) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    if (theme === 'dark') {
      changeTheme('light');
    } else {
      changeTheme('dark');
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.toggleSwitch}>
        <label className={styles.switchLabel}>
          <input
            type='checkbox'
            onClick={handleThemeChange}
            className={styles.checkbox}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeChanger;
