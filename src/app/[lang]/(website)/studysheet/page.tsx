import React, { FC } from 'react';

import styles from './styles.module.scss';

interface StudySheetProps {}

const StudySheet: FC<StudySheetProps> = ({}) => {
  return <div className={styles.studySheetContainer}> StudySheet </div>;
};

export default StudySheet;
