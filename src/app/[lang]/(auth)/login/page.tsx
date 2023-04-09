'use client';
import React, { FC, FormEvent, useContext, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@components/Button';
import { Password, TextInput } from '@components/inputs';
import Loader from '@components/Loader';

import { UserContext } from '@context/user.context';
import { useDictionary } from '@helpers/useDictionary';

import styles from './styles.module.scss';
import { LoginProps, UserState } from './type';

const Login: FC<LoginProps> = ({ params: { lang } }) => {
  const dict = useDictionary(lang);
  const { push } = useRouter();

  const [userData, setUserData] = useState<UserState>({
    password: '',
    email: '',
    nickname: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin();
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
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        {dict === undefined ? (
          <Loader />
        ) : (
          <>
            <h3>{dict.login.authTitle}</h3>
            <form onSubmit={handleSubmit}>
              {/*<Email*/}
              {/*  name={'email'}*/}
              {/*  label={dict.login.emailInput}*/}
              {/*  onChange={handleChange}*/}
              {/*  value={userData.email}*/}
              {/*  required={true}*/}
              {/*/>*/}
              <TextInput
                name={'nickname'}
                label={dict.login.nickNameInput}
                onChange={handleChange}
                value={userData.nickname}
                required={true}
              />
              <Password
                name={'password'}
                label={dict.login.passwordInput}
                onChange={handleChange}
                value={userData.password}
                required={true}
              />

              <Button
                variant={'primary'}
                onClick={() => push(`${lang}/dashboard`)}
                type='submit'>
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
