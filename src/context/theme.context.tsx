'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

const INITIAL_STATE = {
  theme: 'light',
  changeTheme: (newTheme: Theme) => {},
};
export const ThemeContext = createContext(INITIAL_STATE);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== undefined)
      setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  // Save theme preference in local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    if (newTheme !== theme) setTheme(theme);
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
