'use client';
import React, { FC, useContext, useState } from 'react';

import { Button } from '@components/Button';
import { Email, Password, TextInput } from '@components/inputs';
import Loader from '@components/Loader';

import { UserContext } from '@context/user.context';
import { useDictionary } from '@helpers/useDictionary';

import styles from './styles.module.scss';
import { LoginProps, UserState } from './type';

const Login: FC<LoginProps> = ({ params: { lang } }) => {
  const dict = useDictionary(lang);

  const [userData, setUserData] = useState<UserState>({
    password: '',
    email: '',
    nickname: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogin();
    console.info('login');
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const { loginUser } = useContext(UserContext);

  const handleLogin = () => {
    loginUser(userData.nickname, userData.password);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {dict === undefined ? (
          <Loader />
        ) : (
          <>
            <h3>{dict.login.authTitle}</h3>
            <form onSubmit={handleSubmit}>
              <Email
                name={'email'}
                label={dict.login.emailInput}
                onChange={handleChange}
                value={userData.email}
                required={true}
              />
              <Password
                name={'password'}
                label={dict.login.passwordInput}
                onChange={handleChange}
                value={userData.password}
                required={true}
              />
              <TextInput
                name={'nickname'}
                label={dict.login.nickNameInput}
                onChange={handleChange}
                value={userData.nickname}
                required={true}
              />
              <Button variant={'primary'} type='submit'>
                Submit
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
