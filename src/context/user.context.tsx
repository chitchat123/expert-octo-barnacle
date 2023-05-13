'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';

import Cookies from 'js-cookie';

import { parseBody } from '@helpers/parseUserCredentials';

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
      .catch(error => console.error(error, 'An error occurred'));
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

  const loginUser = async (login: string, password: string) => {
    const body = parseBody(login, password);
    //get and save token. set token to cookie
    await fetch('https://api.campus.kpi.ua/oauth/token', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      body: body,
    }).then(res =>
      res
        .json()
        .then(res => {
          setToken(res.access_token);
          Cookies.set('token', res.access_token);
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
