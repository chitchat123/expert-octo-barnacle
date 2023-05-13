import React, { FC } from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

interface TableContentProps {
  content: TableContentType;
  type: 'session' | 'attestation' | 'studysheets' | 'studysheet';
}

type TableContentType =
  | Attestation[]
  | Session[]
  | Lesson[]
  | LessonOccurrence[];

const TableContent: FC<TableContentProps> = ({ type, content }) => {
  const drawTable = () => {
    switch (type) {
      case 'session':
        return (content as Session[]).map((el, idx) => (
          <div key={idx} className={styles.row}>
            <span className={styles.id}>{++idx}</span>
            <div>{el.date.toDateString()}</div>
            <div>{el.subject}</div>
            <div>{el.mark}</div>
            <div>{el.name}</div>
            <div>{el.typeOfControl}</div>
            <div>{el.typeInfo}</div>
          </div>
        ));
      case 'studysheets':
        return (content as Lesson[]).map((el, idx) => (
          <Link key={idx} href={`/${type}/${el.id}`} className={styles.row}>
            <span className={styles.id}>{++idx}</span>
            <div>{el.subject}</div>
            <div>{el.name}</div>
            <div>{el.total}</div>
          </Link>
        ));
      case 'studysheet':
        return (content as LessonOccurrence[]).map((el, idx) => (
          <div key={idx} className={styles.row}>
            <span className={styles.id}>{++idx}</span>
            <div>{el.date.toDateString()}</div>
            <div>{el.teacher}</div>
            <div>{el.mark}</div>
          </div>
        ));
      case 'attestation':
        return (content as Attestation[]).map((el, idx) => (
          <div key={idx} className={styles.row}>
            <span className={styles.id}>{++idx}</span>
            <div>{el.name}</div>
            <div>{el.subject}</div>
            <div>{JSON.stringify(el.first)}</div>
            <div>{JSON.stringify(el.second)}</div>
          </div>
        ));
      default:
        return <div></div>;
    }
  };

  return <div className={styles.body}>{drawTable()}</div>;
};

export default TableContent;
