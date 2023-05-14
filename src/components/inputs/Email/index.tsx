'use client';
import React, { FC, useState } from 'react';

import Image from 'next/image';

import { isValidEmail } from '@helpers/inputHelper';
import mailIco from 'public/icons/login/mail.svg';

import errorIco from '../../../../public/icons/login/error.svg';
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
    <div className={defaultStyle.inputContainer}>
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
      <div className={defaultStyle.icoRight}>
        <Image
          className={defaultStyle.search__icon}
          src={mailIco}
          alt={'icon'}
        />
      </div>

      {error && (
        <div className={defaultStyle.errorPar}>
          <Image
            className={defaultStyle.errorIco}
            alt={'error'}
            src={errorIco}></Image>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export { Email };
