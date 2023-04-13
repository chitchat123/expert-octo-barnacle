import { ContentCard } from '@components/ContentCard';

import styles from './styles.module.scss';
import { FC } from 'react';

interface RightBoardProps {
  news: News[]
  
}
type Paging = {
  pageCount: number;
  totalItemCount: number;
  pageNumber: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
};

type News = {
  id: number;
  subject: string;
  text: string;
  end: null,
  author: string;
  description: string;
};



const RightBoard = ({ news }: RightBoardProps) => {
  return (
    <div className={styles.subjects}>
      {news.map((el, key) => (
        <ContentCard description={el.description} key={key} />
      ))}
    </div>
  );
};

export { RightBoard };




