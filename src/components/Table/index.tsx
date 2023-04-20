'use client';

import React, { FC, ReactNode, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import styles from './styles.module.scss';

interface TableProps {
  type: 'session' | 'attestation' | 'studysheets' | 'studysheet';
  children: ReactNode;
}

const titles = {
  attestation: ['Name', 'Subject', 'First', 'Second'],
  session: ['Date', 'Subject', 'Mark', 'Name', 'Control', 'List'],
  studysheets: ['Subject', 'Name', 'Mark'],
  studysheet: ['Subject', 'Name', 'Mark'],
};

const Table: FC<TableProps> = ({ type, children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState({
    ...(searchParams.get('year') ? { year: searchParams.get('year') } : {}),
    ...(searchParams.get('page')
      ? { page: parseInt(searchParams.get('page') || '1') }
      : {}),
    ...(searchParams.get('semester')
      ? { semester: searchParams.get('semester') }
      : {}),
  });

  useEffect(() => {
    if (Object.keys(state).length > 0) {
      const params = new URLSearchParams();
      Object.entries(state).forEach(([key, value]) =>
        params.set(key, JSON.stringify(value) || '')
      );

      let tmp = `/${type}` + '?' + params.toString();

      router.replace(tmp);
    }
  }, [state]);

  const total = 10;
  return (
    <div className={[styles.tableContainer, styles[type]].join(' ')}>
      <div className={styles.header}>
        <div className={styles.control}>
          <div>
            <label htmlFor='year'>Рік </label>
            <select
              id='year'
              value={state.year || ''}
              onChange={evt => setState({ ...state, year: evt.target.value })}>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>

            <label htmlFor='semester'>Семестр </label>
            <select
              name='semester'
              id='semester'
              value={state.semester || ''}
              onChange={evt =>
                setState({ ...state, semester: evt.target.value })
              }>
              <option value='first'>1</option>
              <option value='second'>2</option>
              <option value='all'>Всі</option>
            </select>
          </div>
          <div>
            <h3>{type}</h3>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.id}>#</span>
          {titles[type].map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
      </div>
      {children}
      <div className={[styles.row, styles.footer].join(' ')}>
        <span className={styles.id}>#</span>
        <div />
        <div className={styles.pagination}>
          <span
            className={styles.arrow}
            onClick={() =>
              state.page &&
              state.page > 1 &&
              setState({ ...state, page: --state.page })
            }>
            {'<'}
          </span>
          <span>
            <span className={styles.active}>{state.page || 1}</span>/{total}
          </span>
          <span
            className={styles.arrow}
            onClick={() =>
              (!state.page || state.page < total) &&
              setState({ ...state, page: state.page ? ++state.page : 2 })
            }>
            {'>'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
