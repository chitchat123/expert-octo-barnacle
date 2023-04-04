'use client';
import { FC, useEffect } from 'react';

import Cookies from 'js-cookie';

import Loader from '@components/Loader';

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
  useEffect(() => {
    Cookies.remove('token');
  }, []);

  return <Loader />;
};

export default Logout;
