'use client';

import React from 'react';

import { getDictionary } from '@helpers/dictionary';

import styles from './styles.module.scss';

const Login = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang);

  return <div className={styles.container}></div>;
};

export default Login;
