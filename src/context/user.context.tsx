'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const INITIAL_STATE = {
  user: null,
  logoutUser: () => {},
  loginUser: (login: string, password: string) => {},
};
export const UserContext = createContext(INITIAL_STATE);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string>();

  const getUser = () => {
    fetch('https://api.campus.kpi.ua/Account/Info', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(result => setUser(result))
      .catch(error => console.error(error, 'An error occured'));
  };

  useEffect(() => {
    let tkn = localStorage.getItem('token');
    if (tkn) setToken(tkn);
  }, []);

  useEffect(() => {
    // if (token) getUser();
  }, [token]);

  const loginUser = async (login: string, password: string) => {
    const body = Object.entries({
      username: login,
      password: password,
      grant_type: 'password',
    })
      .map(function ([key, value]) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
      })
      .join('&');

    await fetch('https://api.campus.kpi.ua/oauth/token', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      body: body,
    }).then(res =>
      res
        .json()
        .then(res => {
          setToken(res.access_token);
          localStorage.setItem('token', res.access_token);
        })
        .catch(er => console.error(er))
    );
  };

  const logoutUser = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      logoutUser,
      loginUser,
    }),
    [user, logoutUser, loginUser]
  );
  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export { UserContextProvider };
