import React from 'react';

import { BsQuestionCircle } from 'react-icons/bs';

import styles from './layout.module.scss';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
