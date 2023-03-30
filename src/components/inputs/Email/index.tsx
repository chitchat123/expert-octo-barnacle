'use client';
import React, { FC, useState } from 'react';

import { isValidEmail } from '@helpers/inputHelper';

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

  const focusOut = () => {
    if (!isValidEmail(value)) {
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
