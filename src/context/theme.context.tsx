'use client';

import React, { createContext, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

const INITIAL_STATE = {
  theme: 'light',
  changeTheme: (theme: Theme) => {},
};
export const ThemeContext = createContext(INITIAL_STATE);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };
  const contextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme]
  );
  return (
    // the Provider gives access to the context to its children
    <ThemeContext.Provider value={contextValue}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider };
