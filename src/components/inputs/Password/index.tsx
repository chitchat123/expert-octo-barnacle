'use client';
import React, { FC, useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/all';

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
    <div className={defaultStyle.container}>
      <input
        name={name}
        type={showPassword ? 'text' : 'password'}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={defaultStyle.input}
      />
      {label && (
        <label
          className={`${value && value.length > 0 ? defaultStyle.shrink : ''} ${
            defaultStyle.label
          }`}>
          {label}
        </label>
      )}
      <p
        onClick={() => setShowPassword(!showPassword)}
        className={defaultStyle.icon}>
        {showPassword ? <FiEye size={15} /> : <FiEyeOff size={15} />}
      </p>
      <div className={defaultStyle.parError}>{error}</div>
    </div>
  );
};

export { Password };
