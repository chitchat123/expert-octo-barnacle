import React, { ReactNode } from 'react';

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { ContextMenu } from '@components/ContextMenu';

import { IconButton } from '@components';
import { DictionaryCtxMenu } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';
import { logoIco, notifyIco, personIco } from '@helpers/images';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const Header: ({
  dictionary,
  lang,
}: {
  dictionary: DictionaryCtxMenu;
  lang: Locale;
}) => Promise<ReactNode> = async ({ dictionary }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    throw new Error();
  }

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
          <IconButton size={'small'} icon={notifyIco} />
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
          <IconButton size={'small'} icon={personIco} />
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
