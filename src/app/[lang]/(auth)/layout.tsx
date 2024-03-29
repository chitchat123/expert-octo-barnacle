import React, { ReactNode } from 'react';

import Image from 'next/image';

import Footer from '@components/Footer';

import { Locale } from '@helpers/i18n';
import { kpiLogo } from '@helpers/images';

import styles from './layout.module.scss';

interface AuthProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Auth: ({
  children,
  params: { lang },
}: AuthProps) => Promise<ReactNode> = async ({ children, params: {} }) => {
  // const dict = await getDictionary(lang);

  return (
    <section className={styles.authLayout}>
      <div className={styles.auth_content}>
        <div className={styles.children}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <div className={styles.auth_logo}>
        <div className={styles.auth_fqu}>
          <h1>CAMPUS</h1>
          <Image width={560} alt={'logo'} src={kpiLogo}></Image>
          <h1>NTUU KPI</h1>
        </div>
      </div>
    </section>
  );
};

export default Auth;
