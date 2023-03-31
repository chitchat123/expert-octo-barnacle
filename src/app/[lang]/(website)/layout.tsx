import React from 'react';

import Footer from '@components/Footer';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';

import { getDictionary } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Layout: ({
  children,
  params: { lang },
}: LayoutProps) => Promise<JSX.Element> = async ({
  children,
  params: { lang },
}) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header />
      <section className={styles.websiteLayout}>
        <div className={styles.mainContainer}>
          <Sidebar dictionary={dict.sidebar} />
          <div className={styles.childrenContainer}>
            {children}
            <Footer fulled={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
