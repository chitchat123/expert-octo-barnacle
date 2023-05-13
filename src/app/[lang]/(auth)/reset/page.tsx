'use client';
import React, { FC, useState } from 'react';

import { Email } from '@components/inputs';

import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

interface ResetProps {}

const Reset: FC<ResetProps> = ({}) => {
  const [state, setState] = useState<string>('');

  return (
    <div className={styles.resetContainer}>
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
          <Button>Відновити</Button>
          <Button>Назад</Button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
