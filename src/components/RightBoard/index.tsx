import { NewsCard } from '@components/NewsCard';

import styles from './styles.module.scss';

interface RightBoardProps {
  news: News[];
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
  end: null;
  author: string;
  description: string;
};

const RightBoard = ({ news }: RightBoardProps) => {
  return (
    <div className={styles.subjects}>
      {news.map(({ subject, description }, key) => (
        <NewsCard title={subject} description={description} key={key} />
      ))}
    </div>
  );
};

export { RightBoard };
