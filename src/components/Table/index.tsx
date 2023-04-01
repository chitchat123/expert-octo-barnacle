import React, { FC } from 'react';

import styles from './styles.module.scss';

interface TableProps {
  titles: string[];
  content: TableContent;
  type: 'session';
}

type TableContent = Session[] | string[];

type Session = {
  date: Date;
  name: string;
  mark: number;
};

const Table: FC<TableProps> = ({ titles, type, content }) => {
  const drawTable = () => {
    switch (type) {
      case 'session':
        let tmp = content as Session[];
        return tmp.map((el, idx) => (
          <div key={idx} className={styles.row}>
            <div>{el.name}</div>
            <div>{el.date.toDateString()}</div>
            <div>{el.mark}</div>
          </div>
        ));
      default:
        return <div></div>;
    }
  };

  return (
    <div className={[styles.container, styles.attestation].join(' ')}>
      <div className={styles.row}>
        {titles.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
      <hr />
      {drawTable()}
    </div>
  );
};

export default Table;
