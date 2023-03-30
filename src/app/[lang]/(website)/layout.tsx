import React from 'react';

import Footer from '@components/Footer';
import { Header } from '@components/Header';

export default function WebSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
