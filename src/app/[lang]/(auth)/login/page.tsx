'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@components/Button';
import { Email, Password, TextInput } from '@components/inputs';

import styles from './styles.module.scss';

interface UserState {
  email: string;
  password: string;
  nickname: string;
}

const Login = () => {
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
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit}>
          <Email
            name={'email'}
            label={'Email'}
            onChange={handleChange}
            value={userData.email}
            required={true}
          />
          <Password
            name={'password'}
            label={'Password'}
            onChange={handleChange}
            value={userData.password}
            required={true}
          />
          <TextInput
            name={'nickname'}
            label={'Nickname'}
            onChange={handleChange}
            value={userData.nickname}
            required={true}
          />
          <Button variant={'primary'} type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
