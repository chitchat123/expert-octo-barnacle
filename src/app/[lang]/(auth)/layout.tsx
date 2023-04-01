import React from 'react';

import { AuthModalButton } from '@components/Modal';

import { getDictionary } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

import styles from './layout.module.scss';

interface AuthProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Auth: ({
  children,
  params: { lang },
}: AuthProps) => Promise<JSX.Element> = async ({
  children,
  params: { lang },
}) => {
  const dict = await getDictionary(lang);

  return (
    <section className={styles.authLayout}>
      <div className={styles.auth_children}>{children}</div>

      <div className={styles.auth_logo}>
        <h2>eCampus</h2>
        <div className={styles.auth_fqu}>
          <AuthModalButton dictionary={dict} />
        </div>
      </div>
    </section>
  );
};

export default Auth;
