import React from 'react';

import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdCircleNotifications } from 'react-icons/md';

import { ContextMenu } from '@components/ContextMenu';

import { DictionaryCtxMenu } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';
import { apiCallUser } from '@helpers/queries/getUserInfo';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const Header: ({
  dictionary,
}: {
  dictionary: DictionaryCtxMenu;
  lang: Locale;
}) => Promise<JSX.Element> = async ({ dictionary }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    throw new Error();
  }

  const { fullName } = await apiCallUser(token.value);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <h3>logo</h3>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Button size={'small'} variant={'secondary'}>
            Поточний кампус
          </Button>
        </div>
        <ContextMenu>
          <FaUserCircle fill={'#18A0FB'} size={60} />
          <>
            <Link className={styles.contextLink} href={'/settings'}>
              Custom
            </Link>
            <Link className={styles.contextLink} href={'/settings'}>
              Custom
            </Link>
          </>
        </ContextMenu>
        <ContextMenu>
          <MdCircleNotifications fill={'#18A0FB'} size={60} />
          <>
            <div>{fullName}</div>
            <Link className={styles.contextLink} href={'/settings'}>
              {dictionary.settings}
            </Link>
            <Link className={styles.contextLink} href={'/logout'}>
              {dictionary.logout}
            </Link>
          </>
        </ContextMenu>
      </div>
    </div>
  );
};

export { Header };
