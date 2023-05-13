import { FC } from 'react';

import Link from 'next/link';

import { Card } from '@components/Card';

import styles from './styles.module.scss';

interface SubjectCardProps {
  href: string;
  subject: Lesson;
}

const SubjectCard: FC<SubjectCardProps> = ({ href, subject }) => {
  return (
    <Link href={`/${href}`}>
      <Card padding={24} className={styles.subjectCard}>
        <div className={styles.content}>
          <div>
            <div className={styles.title}>{subject.name}</div>
            <div className={styles.description}>{subject.teacher}</div>
          </div>
          <div>
            <div className={styles.description}>{subject.total}</div>
            <progress max='100' value={subject.total} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export { SubjectCard };
