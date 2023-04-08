'use client';
import { FC, useContext } from 'react';

import { ThemeContext } from '@context/theme.context';

import styles from './styles.module.scss';

interface ThemeChangerProps {}

const ThemeChanger: FC<ThemeChangerProps> = ({}) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: 'flex' }}>
      {/*<p>ToggleTheme</p>*/}
      {/*<div style={{ display: 'flex', gap: '20px' }}>*/}
      {/*  <p onClick={() => changeTheme('dark')}>Dark</p>*/}
      {/*  <p onClick={() => changeTheme('light')}>Light</p>*/}
      {/*</div>*/}
      <div className={styles.toggleSwitch}>
        <label className={styles.switchLabel}>
          <input type='checkbox' className={styles.checkbox} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeChanger;
