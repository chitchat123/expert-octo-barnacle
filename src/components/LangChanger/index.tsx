'use client';
import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { locales } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

interface LangChangerProps {
  currLocale: Locale;
}

const LangChanger: FC<LangChangerProps> = ({ currLocale }) => {
  const pathname = usePathname();
  return (
    <div>
      {locales.map((locale, idx) =>
        currLocale === locale ? (
          <h1 key={idx}>{currLocale}</h1>
        ) : (
          <Link
            href={{ pathname: pathname.replace(currLocale, locale) }}
            key={idx}>
            {locale}
          </Link>
        )
      )}
    </div>
  );
};

export { LangChanger };
