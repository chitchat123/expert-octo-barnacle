'use client';
import React, { FC } from 'react';

import { IconButton } from '@components/buttons/IconButton';

import { fc, tg } from '@helpers/images';

import styles from './styles.module.scss';

interface FooterProps {
  changer?: boolean;
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.left}>
        Усі права застережено. © 2023 <u>КПІ ім. Ігоря Сікорського</u>
        <br />
        Розробник: <u>Конструкторське бюро інформаційних систем</u>
      </div>
      <div className={styles.right}>
        {/*{changer && (*/}
        {/*  <div>*/}
        {/*    <ThemeChanger />*/}
        {/*  </div>*/}
        {/*)}*/}
        <div>Соціальні мережі</div>
        <div className={styles.socialLinks}>
          <IconButton
            size={'extraSmall'}
            variant={'secondary'}
            icon={fc}
            onClick={() => {}}
          />

          <IconButton
            size={'extraSmall'}
            variant={'secondary'}
            icon={tg}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
