'use client';
import { FC, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Locale } from '@helpers/i18n';
import translate from 'public/icons/sidebar/translate.svg';

import styles from './styles.module.scss';

interface LangChangerProps {
  currLocale: Locale;
  state: boolean;
}

const LangChanger: FC<LangChangerProps> = ({ currLocale, state }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [state]);

  switch (currLocale) {
    case 'en':
      return (
        <Link href={{ pathname: pathname.replace(currLocale, 'ua') }}>
          <div className={styles.langChanger}>
            <Image src={translate} alt={'icon'}></Image>
            <p>{state ? 'Українська' : ''}</p>
          </div>
        </Link>
      );
    case 'ua':
      return (
        <Link href={{ pathname: pathname.replace(currLocale, 'en') }}>
          <div className={styles.langChanger}>
            <Image src={translate} alt={'icon'}></Image>
            <p>{state ? 'English' : ''}</p>
          </div>
        </Link>
      );
  }
};

export { LangChanger };
