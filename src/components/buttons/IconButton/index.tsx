'use client';
import React, { CSSProperties, FC, useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './styles.module.scss';

interface IndexProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: any;
  onClick?: any;
  size?: 'medium' | 'normal' | 'small' | 'extraSmall';
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary';
}

const IconButton: FC<IndexProps> = ({
  variant,
  size,
  type,
  style,
  className,
  disabled,
  icon,
  children,
  onClick,
}) => {
  const [btnStyles, setBtnStyle] = useState<string>('');

  useEffect(() => {
    setBtnStyle(
      [
        styles.iconButtonContainer,
        variant ? styles[variant] : styles.primary,
        size ? styles[size] : styles.normal,
        className ? className : '',
      ].join(' ')
    );
  }, []);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={btnStyles}>
      <>
        {icon ? <Image alt={'icon'} src={icon}></Image> : ''}
        {children}
      </>
    </button>
  );
};

export { IconButton };
