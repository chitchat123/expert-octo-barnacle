import React from 'react';

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { ContextMenu } from '@components/ContextMenu';

import { IconButton } from '@components';
import { DictionaryCtxMenu } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';
import { apiCallUser } from '@helpers/queries/getUserInfo';
import logoIco from 'public/icons/header/logo.svg';
import notificIco from 'public/icons/header/notification on.svg';
import pessonIco from 'public/icons/header/user.svg';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const Header: ({
  dictionary,
  lang,
}: {
  dictionary: DictionaryCtxMenu;
  lang: Locale;
}) => Promise<JSX.Element> = async ({ dictionary, lang }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    throw new Error();
  }

  const { fullName } = await apiCallUser(token.value);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image alt={'logo'} src={logoIco}></Image>
        <h4>CAMPUS</h4>
      </div>
      <div className={styles.buttons}>
        <Button size={'small'} variant={'secondary'}>
          Поточна версія кампусу
        </Button>
        <ContextMenu>
          <IconButton size={'small'} icon={notificIco} />
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
          <IconButton size={'small'} icon={pessonIco} />
          <>
            <Link className={styles.contextLink} href={'/settings'}>
              <Button style={{ width: '100%' }} size={'small'}>
                {' '}
                {dictionary.settings}
              </Button>
            </Link>
            <Link className={styles.contextLink} href={'/profile'}>
              <Button style={{ width: '100%' }} size={'small'}>
                {' '}
                {dictionary.profile}
              </Button>
            </Link>
          </>
        </ContextMenu>
      </div>
    </div>
  );
};

export { Header };
