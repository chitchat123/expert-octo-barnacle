import React, { FC } from 'react';

import defaultStyle from '../index.module.scss';

import { TextInputProps } from './type';

const TextInput: FC<TextInputProps> = ({
  label,
  disabled,
  onChange,
  value,
  readOnly,
  required,
  error,
  name,
}) => {
  return (
    <div className={defaultStyle.container}>
      <input
        name={name}
        type='text'
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
      <div className={defaultStyle.parError}>{error}</div>
    </div>
  );
};

export { TextInput };
