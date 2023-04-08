'use client';
import { FC, useContext } from 'react';

import { Button } from '@components/Button';

import { ThemeContext } from '@context/theme.context';

interface ThemeChangerProps {}

const ThemeChanger: FC<ThemeChangerProps> = ({}) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>ToggleTheme</h1>
      <Button onClick={() => changeTheme('dark')}>Dark</Button>
      <Button onClick={() => changeTheme('light')}>Light</Button>
    </div>
  );
};

export default ThemeChanger;
