import React, { FC } from 'react';

import ThemeChanger from '@components/ThemeChanger';

import styles from './styles.module.scss';

interface FooterProps {
  fulled: boolean;
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
        <div>
          <ThemeChanger />
        </div>
        <div>Соціальні мережі</div>
      </div>
    </div>
  );
};

export default Footer;
