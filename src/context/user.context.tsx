'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';

import Cookies from 'js-cookie';

const INITIAL_STATE = {
  user: null,
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
    let tkn = Cookies.get('token');
    if (tkn) setToken(tkn);
  }, []);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);
  console.info(user, 'user');

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
          [
            'kpi.ua',
            'campus.kpi.ua',
            'ecampus.kpi.ua',
            'login.kpi.ua',
            'localhost:3000',
          ].forEach(domain =>
            Cookies.set('token', res.access_token, { domain: domain })
          );
        })
        .catch(er => console.error(er))
    );
  };

  const contextValue = useMemo(
    () => ({
      user,
      loginUser,
    }),
    [user, loginUser]
  );
  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export { UserContextProvider };
