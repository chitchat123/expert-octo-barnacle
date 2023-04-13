import React, { FC } from 'react';

import Image from 'next/image';

import errorIco from '../../../../public/icons/login/error.svg';
import defaultStyles from '../index.module.scss';

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
  iconItem,
  iconPosition,
}) => {
  return (
    <div className={defaultStyles.inputContainer}>
      {iconItem && iconPosition === 'left' ? (
        <div className={defaultStyles.icoLeft}>
          <Image
            className={defaultStyles.search__icon}
            src={iconItem}
            alt={'icon'}
          />
        </div>
      ) : (
        ''
      )}
      <input
        name={name}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={{
          paddingLeft: iconPosition === 'left' ? 50 : 20,
        }}
        type='text'
        className={`${defaultStyles.input} ${
          error?.length && defaultStyles.error
        }`}
      />
      {error && (
        <div className={defaultStyles.errorPar}>
          <Image
            className={defaultStyles.errorIco}
            alt={'error'}
            src={errorIco}></Image>
          <p>{error}</p>
        </div>
      )}
      <label
        className={`${value && value.length > 0 ? defaultStyles.shrink : ''} ${
          defaultStyles.label
        }`}>
        {label}
      </label>
      {iconItem && iconPosition === 'right' ? (
        <div className={defaultStyles.icoRight}>
          <Image
            className={defaultStyles.search__icon}
            src={iconItem}
            alt={'icon'}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export { TextInput };
