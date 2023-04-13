import React, { FC, useEffect, useRef, useState } from 'react';

import ReactDOM from 'react-dom';

import { ModalProps } from '@components/Modal/type';

import { useOnClickOutside } from '@helpers/useOutsideClick';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

export const Modal: FC<ModalProps> = ({ show, onClose, dictionary }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, onClose);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className={styles.modal}>
      <div className={styles.container} ref={ref}>
        <div className={styles.left}>
          {dictionary.help.left.map((el, idx) => (
            <div key={idx} className={styles.main}>
              <h4>{el.title}</h4>
              <p>{el.main}</p>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <div className={styles.contacts}>
            <h4>{dictionary.help.support}</h4>
            {dictionary.help.right.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    let root = document.getElementById('modal-root');
    if (root) {
      return ReactDOM.createPortal(modalContent, root);
    } else {
      return null;
    }
  } else {
    return null;
  }
};
