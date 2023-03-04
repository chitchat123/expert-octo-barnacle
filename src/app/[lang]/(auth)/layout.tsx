import React from 'react';

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
        <h1>Logo</h1>
        <div className={styles.auth_fqu}>FQU</div>
      </div>
    </section>
  );
}
