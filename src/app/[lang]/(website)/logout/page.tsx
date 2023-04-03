'use client';
import { FC, useEffect } from 'react';

import Cookies from 'js-cookie';

import Loading from '@components/Loader';

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
  useEffect(() => {
    Cookies.remove('token');
  }, []);
  return <Loading />;
};

export default Logout;
