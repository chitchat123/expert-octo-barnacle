'use client';
import React, { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { ButtonProps } from './type';

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  type,
  style,
  className,
  disabled,
  onClick,
  isIcon,
  ...rest
}) => {
  const [btnStyles, setBtnStyle] = useState<string>('');

  useEffect(() => {
    setBtnStyle(
      [
        styles.button,
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
      className={btnStyles}
      {...rest}>
      {children}
    </button>
  );
};

export { Button };
