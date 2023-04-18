import React, { FC } from 'react';

import styles from './styles.module.scss';

interface TableContentProps {
  content: TableContentType;
  type: 'session' | 'attestation';
}

type TableContentType = Attestation[];

const TableContent: FC<TableContentProps> = ({ type, content }) => {
  console.warn('test');
  const drawTable = () => {
    switch (type) {
      case 'session':
        break;
      case 'attestation':
        return content.map((el, idx) => (
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
