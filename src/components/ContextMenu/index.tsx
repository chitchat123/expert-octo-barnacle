'use client';
import { FC, ReactNode, useRef, useState } from 'react';

import { useOnClickOutside } from '@helpers/useOutsideClick';

interface ContextMenuProps {
  children: [ReactNode, ReactNode];
}

const ContextMenu: FC<ContextMenuProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contextRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useOnClickOutside(contextRef, () => setShow(false));
  return (
    <div ref={ref}>
      <div
        onClick={() => {
          console.info(contextRef.current?.offsetWidth);
          setShow(!show);
        }}>
        {children[0]}
      </div>
      {show && (
        <div
          ref={contextRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5rem',
            border: '1px solid #000',
            position: 'absolute',
            left: ref.current?.offsetLeft || 0,
            top:
              (ref.current?.offsetTop || 0) +
              (ref.current?.offsetHeight || 0) +
              10,
          }}>
          {children[1]}
        </div>
      )}
    </div>
  );
};

export { ContextMenu };
