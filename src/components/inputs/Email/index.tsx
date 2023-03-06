'use client';
import React, { FC, useState } from 'react';

import defaultStyle from '../index.module.scss';

import { EmailInputProps } from './type';

const Email: FC<EmailInputProps> = ({
  readOnly,
  required,
  value,
  onChange,
  disabled,
  label,
  name,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const isValidEmail = () => {
    let re;
    re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  };

  const focusOut = () => {
    if (!isValidEmail()) {
      setError('Invalid Email');
    } else {
      setError('');
    }
  };

  return (
    <div className={defaultStyle.container}>
      <input
        name={name}
        type='email'
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        onBlur={focusOut}
        className={`${error ? defaultStyle.error : ''} ${defaultStyle.input}`}
      />
      {label && (
        <label
          className={`${error ? defaultStyle.error : ''} ${
            value && value.length > 0 ? defaultStyle.shrink : ''
          } ${defaultStyle.label}`}>
          {label}
        </label>
      )}
      <div className={defaultStyle.parError}>{error}</div>
    </div>
  );
};

export { Email };
