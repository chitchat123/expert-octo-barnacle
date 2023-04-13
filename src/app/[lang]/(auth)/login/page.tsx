'use client';
import React, { FC, FormEvent, useContext, useState } from 'react';

import { useRouter } from 'next/navigation';

import { IconButton } from '@components/buttons/IconButton';
import { Card } from '@components/Card';
import { Password, TextInput } from '@components/inputs';
import Loader from '@components/Loader';

import { UserContext } from '@context';
import { useDictionary } from '@helpers/useDictionary';
import { Button } from 'src/components/buttons/Button';

import modalIco from '../../../../../public/icons/login/_.svg';
import mailIco from '../../../../../public/icons/login/mail.svg';
import langIco from '../../../../../public/icons/login/translate.svg';

import styles from './styles.module.scss';
import { LoginProps, UserState } from './type';

const Login: FC<LoginProps> = ({ params: { lang } }) => {
  const dict = useDictionary(lang);
  const { push } = useRouter();

  const [userData, setUserData] = useState<UserState>({
    password: '',
    email: '',
    nickname: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const { loginUser } = useContext(UserContext);

  const handleLogin = () => {
    loginUser(userData.nickname, userData.password);
  };
  return (
    <div className={styles.loginContainer}>
      <Card padding={40}>
        {dict === undefined ? (
          <Loader />
        ) : (
          <>
            <div className={styles.loginContainerTitle}>
              <h3>{dict.login.authTitle}</h3>
              <div className={styles.titleIcon}>
                <IconButton
                  size={'medium'}
                  variant={'primary'}
                  icon={langIco}
                  onClick={() => {}}
                />
                <IconButton
                  size={'medium'}
                  variant={'primary'}
                  icon={modalIco}
                  onClick={() => {}}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                <TextInput
                  // error={'Error'}
                  iconPosition={'right'}
                  iconItem={mailIco}
                  name={'nickname'}
                  label={dict.login.nickNameInput}
                  onChange={handleChange}
                  value={userData.nickname}
                  required={true}
                />
                <Password
                  // error={'Пароль невірний'}
                  name={'password'}
                  label={dict.login.passwordInput}
                  onChange={handleChange}
                  value={userData.password}
                  required={true}
                />
              </div>

              <Button
                style={{ width: '100%' }}
                className={styles.button}
                variant={'primary'}
                onClick={() => push(`${lang}/dashboard`)}
                type='submit'
                size={'normal'}>
                Вхід
              </Button>
            </form>
          </>
        )}
      </Card>
    </div>
  );
};

export default Login;
