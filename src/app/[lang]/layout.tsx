import React from 'react';

import '../global.scss';
import { i18n } from '@helpers/i18n';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
