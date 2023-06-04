'use client';
import React, { FC, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Email } from '@components/inputs';

import { Locale } from '@helpers/i18n';
import { useDictionary } from '@helpers/useDictionary';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

interface ResetProps {
  params: { lang: Locale };
}

const Reset: FC<ResetProps> = ({ params: { lang } }) => {
  const [state, setState] = useState<string>('');
  const dict = useDictionary(lang);
  const router = useRouter();

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
          <Button onClick={() => router.back()}>
            {dict?.find.buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
