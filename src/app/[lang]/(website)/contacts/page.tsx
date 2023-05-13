import React, { FC } from 'react';

import styles from './styles.module.scss';

interface ContactsProps {}

const Contacts: FC<ContactsProps> = ({}) => {
  return <div className={styles.contactsContainer}> Contacts </div>;
};

export default Contacts;
