import React, { FC } from 'react';

import { BsQuestionCircle } from 'react-icons/bs';

import styles from './layout.module.scss';

interface AuthProps {
  children: React.ReactNode;
}

const Auth: FC<AuthProps> = ({ children }) => {
  return (
    <section className={styles.authLayout}>
      <div className={styles.auth_children}>{children}</div>

      <div className={styles.auth_logo}>
        <h2>eCampus</h2>
        <div className={styles.auth_fqu}>
          <BsQuestionCircle size={75} />
        </div>
      </div>
    </section>
  );
};

export default Auth;
