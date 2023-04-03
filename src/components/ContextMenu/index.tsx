'use client';
import { FC, useRef, useState } from 'react';

import { useOnClickOutside } from '@helpers/useOutsideClick';

import styles from './styles.module.scss';
import { ContextMenuProps } from './type';

const ContextMenu: FC<ContextMenuProps> = ({ children }) => {
  const contextRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useOnClickOutside(contextRef, () => setShow(false));
  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => {
          setShow(!show);
        }}>
        {children[0]}
      </div>
      {show && (
        <div className={styles.contextMenuContainer} ref={contextRef}>
          {children[1]}
        </div>
      )}
    </div>
  );
};

export { ContextMenu };
