import { NewsCard } from '@components/NewsCard';

import styles from './styles.module.scss';

interface RightBoardProps {
  news: News[];
}

const RightBoard = ({ news }: RightBoardProps) => {
  // console.info(news, 'news');
  return (
    <div className={styles.subjects}>
      {news.map(({ subject, description }, key) => (
        <NewsCard title={subject} description={description} key={key} />
      ))}
    </div>
  );
};

export { RightBoard };
