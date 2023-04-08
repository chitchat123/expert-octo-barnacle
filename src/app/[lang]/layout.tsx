import React, { FC } from 'react';

import '../global.scss';

import { ThemeContextProvider } from '@context/theme.context';
import { UserContextProvider } from '@context/user.context';
import { Locale } from '@helpers/i18n';

// export const generateStaticParams = async () => {
//   return i18n.locales.map(locale => ({ lang: locale }));
// };

interface LayoutProps {
  children: React.ReactNode;
  lang: Locale;
}

const Layout: FC<LayoutProps> = ({ children, lang }) => {
  return (
    <html lang={lang}>
      <body>
        <>
          <ThemeContextProvider>
            <UserContextProvider>{children}</UserContextProvider>
          </ThemeContextProvider>
          <div id='modal-root'></div>
        </>
      </body>
    </html>
  );
};

export default Layout;
