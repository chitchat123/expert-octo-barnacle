import React, { FC } from 'react';

import '../global.scss';
import { ThemeContextProvider, UserContextProvider } from '@context';
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
        <ThemeContextProvider>
          <>
            <UserContextProvider>{children}</UserContextProvider>
            <div id='modal-root'></div>
          </>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default Layout;
