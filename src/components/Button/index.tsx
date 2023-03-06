import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { ButtonProps } from './type';

const Button = ({
  children,
  variant,
  // size,
  type,
  style,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  const [btnStyles, setBtnStyle] = useState<string>('');

  useEffect(() => {
    setBtnStyle(
      [
        styles.button,
        variant ? styles[variant] : styles.primary,
        // size ? styles[size] : styles.medium,
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
