import React from 'react';

import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdCircleNotifications } from 'react-icons/md';

import { Button } from '@components/Button';
import { ContextMenu } from '@components/ContextMenu';

import { DictionaryCtxMenu } from '@helpers/dictionary';
import { apiCallUser } from '@helpers/getUserInfo';
import { Locale } from '@helpers/i18n';

import styles from './styles.module.scss';

const Header: ({
  dictionary,
}: {
  dictionary: DictionaryCtxMenu;
  lang: Locale;
}) => Promise<JSX.Element> = async ({ dictionary, lang }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const { fullName } = await apiCallUser(token);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>logo</h3>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Button variant={'secondary'}>Поточний кампус</Button>
        </div>
        {/*<LangChanger currLocale={lang} />*/}
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
