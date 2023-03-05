`use client`;
import React from 'react';

import { getDictionary } from '@helpers/dictionary';

import styles from './styles.module.scss';

const Login = async () => {
  const dictionary = await getDictionary('ua');
  return (
    <div className={styles.container}>
      <h1>{dictionary['test']}</h1>
    </div>
  );
};

export default Login;
