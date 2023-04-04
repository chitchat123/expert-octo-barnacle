import React, { FC } from 'react';

import '../global.scss';
import { UserContextProvider } from '@context/user.context';
import { Locale } from '@helpers/i18n';

// export const generateStaticParams = async () => {
//   return i18n.locales.map(locale => ({ lang: locale }));
// };

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100vh' }}>
      <UserContextProvider>{children}</UserContextProvider>
      <div id='modal-root'></div>
    </div>
  );
};

export default Layout;
