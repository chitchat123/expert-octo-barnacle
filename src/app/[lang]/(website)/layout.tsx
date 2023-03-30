import React, { FC } from 'react';

import Footer from '@components/Footer';
import { Header } from '@components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      <>
        <Header />
      </>
      <>{children}</>
      <>
        <Footer fulled={true}></Footer>
      </>
    </section>
  );
};

export default Layout;
