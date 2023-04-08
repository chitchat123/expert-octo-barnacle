'use client';
import { FC, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import Loader from '@components/Loader';

import { Locale } from '@helpers/i18n';

interface LogoutProps {
  params: { lang: Locale };
}

const redirect = new Promise(resolve => {
  Cookies.remove('token');
  resolve('logout');
});

const Logout: FC<LogoutProps> = ({ params: { lang } }) => {
  const { push } = useRouter();
  useEffect(() => {
    redirect.then(() => push(`/${lang}/login`));
  }, []);

  return <Loader />;
};

export default Logout;
