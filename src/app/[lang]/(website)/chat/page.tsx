import React, { FC } from 'react';

import styles from './styles.module.scss';

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  return <div className={styles.chatContainer}> Chat </div>;
};

export default Chat;
