'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

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
      <form onSubmit={handleSubmit}>
        <label>Sign in</label>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
