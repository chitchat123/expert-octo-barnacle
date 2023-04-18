'use client';

import React, { FC, ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import styles from './styles.module.scss';

interface TableProps {
  type: 'session' | 'attestation';
  children: ReactNode;
}

const titles = {
  attestation: ['Name', 'Subject', 'First', 'Second'],
  session: ['Name', 'Subject', 'First', 'Second'],
};

const Table: FC<TableProps> = ({ type, children }) => {
  const router = useRouter();
  // router.push('/attestation?test=123213');

  const [state, setState] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(state).forEach(([key, value]) => params.set(key, value));

    console.info(params.toString());

    let tmp = '/attestation' + '?' + params.toString();
    console.info(tmp);

    router.push(tmp); // or router
  }, [state]);

  return (
    <div className={[styles.tableContainer, styles[type]].join(' ')}>
      <div className={styles.header}>
        {/*<Button onClick={() => router.push('/attestation?test=w')}></Button>*/}
        <div className={styles.control}>
          <div>
            <label htmlFor='year'>Рік </label>

            <select
              name='year'
              id='year'
              onChange={evt => setState({ ...state, year: evt.target.value })}>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>
            <label htmlFor='semester'>Семестр </label>

            <select name='semester' id='semester'>
              <option value='first'>1</option>
              <option value='second'>2</option>
              <option value='all'>Всі</option>
            </select>
          </div>
          <div>
            <h3>Атестація</h3>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.id}>#</span>
          {titles[type].map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={[styles.row, styles.footer].join(' ')}>
        <span className={styles.id}>#</span>
        {titles[type].map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
    </div>
  );
};

export default Table;
