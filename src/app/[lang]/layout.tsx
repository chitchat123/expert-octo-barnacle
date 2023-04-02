import React, { FC } from 'react';

import '../global.scss';
import { UserContextProvider } from '@context/user.context';
import { i18n, Locale } from '@helpers/i18n';

export const generateStaticParams = async () => {
  return i18n.locales.map(locale => ({ lang: locale }));
};

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Layout: FC<LayoutProps> = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body data-theme={'light'}>
        <UserContextProvider>{children}</UserContextProvider>
        <div id='modal-root'></div>
      </body>
    </html>
  );
};

export default Layout;
