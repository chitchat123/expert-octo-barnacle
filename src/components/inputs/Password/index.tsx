'use client';
import React, { FC, useState } from 'react';

import Image from 'next/image';

import defaultStyles from '@components/inputs/index.module.scss';

import errorIco from '../../../../public/icons/login/error.svg';
import eyeOn from '../../../../public/icons/login/eye on.svg';
import eyeOff from '../../../../public/icons/login/eye-close-line.svg';
import defaultStyle from '../index.module.scss';

import { PasswordInputProps } from './type';

const Password: FC<PasswordInputProps> = ({
  label,
  disabled,
  onChange,
  value,
  readOnly,
  error,
  required,
  name,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={defaultStyle.inputContainer}>
      <input
        name={name}
        type={showPassword ? 'text' : 'password'}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`${defaultStyles.input} ${
          error?.length && defaultStyles.error
        }`}
      />
      {label && (
        <label
          className={`${value && value.length > 0 ? defaultStyle.shrink : ''} ${
            defaultStyle.label
          }`}>
          {label}
        </label>
      )}
      <div
        className={defaultStyles.icoRight}
        onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <Image
            className={defaultStyles.search__icon}
            src={eyeOn}
            alt={'icon'}
          />
        ) : (
          <Image
            className={defaultStyles.search__icon}
            src={eyeOff}
            alt={'icon'}
          />
        )}
      </div>
      {error && (
        <div className={defaultStyles.errorPar}>
          <Image
            className={defaultStyles.errorIco}
            alt={'error'}
            src={errorIco}></Image>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export { Password };
