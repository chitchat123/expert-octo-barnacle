'use client';
import React, { FC, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@components/Button';
import { Email, Password, TextInput } from '@components/inputs';
import Loader from '@components/Loader';

import { useDictionary } from '@helpers/useDictionary';

import styles from './styles.module.scss';
import { LoginProps, UserState } from './type';

const Login: FC<LoginProps> = ({ params: { lang } }) => {
  const dict = useDictionary(lang);
  const router = useRouter();

  const [userData, setUserData] = useState<UserState>({
    password: '',
    email: '',
    nickname: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push('/');
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
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
