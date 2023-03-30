import React, { FC } from 'react';

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
    </section>
  );
};

export default Layout;
