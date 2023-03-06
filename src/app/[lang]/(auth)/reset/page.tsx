'use client';
import React, { useState } from 'react';

import { Button } from '@components/Button';
import { Email } from '@components/inputs';

import styles from './styles.module.scss';

const Reset = () => {
  const [state, setState] = useState<string>('');
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>Втратили свій пароль, чи логін?</h3>
        <p>Ви можете вiдновити доступ до системи.</p>
        <div className={styles.reset}>
          <Email
            name={'email'}
            label={'Email'}
            onChange={(e: any) => setState(e.target.value)}
            value={state}
            required={true}
          />
          <Button variant={'primary'} size={'large'}>
            Відновити
          </Button>
          <Button variant={'black'} size={'large'}>
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
