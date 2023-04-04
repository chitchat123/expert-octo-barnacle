import { ContentCard } from '@components/ContentCard';

import styles from './styles.module.scss';

const GridTable: ({
  data,
}: {
  data: Promise<any>;
}) => Promise<JSX.Element> = async ({ data }) => {
  const res = await data.then(res => [1, 2, 3, 4]);

  return (
    <div className={styles.subjects}>
      {res.map((el, key) => (
        <ContentCard key={key} />
      ))}
    </div>
  );
};
export { GridTable };
