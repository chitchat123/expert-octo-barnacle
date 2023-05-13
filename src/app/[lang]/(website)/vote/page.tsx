import React, { FC } from 'react';

import styles from './styles.module.scss';

interface VoteProps {}

const Vote: FC<VoteProps> = ({}) => {
  return <div className={styles.voteContainer}> Vote </div>;
};

export default Vote;
