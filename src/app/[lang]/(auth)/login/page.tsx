'use client';
import React, { FC, FormEvent, useContext, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IconButton } from '@components/buttons/IconButton';
import { Card } from '@components/Card';
import { Password, TextInput } from '@components/inputs';
import Loader from '@components/Loader';
import { AuthModalButton } from '@components/Modal';

import { UserContext } from '@context';
import { useDictionary } from '@helpers/useDictionary';
import mailIco from 'public/icons/login/mail.svg';
import search from 'public/icons/login/search.svg';
import square from 'public/icons/login/square.svg';
import langIco from 'public/icons/login/translate.svg';
import unlocked from 'public/icons/login/unlocked.svg';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';
import { LoginProps, UserState } from './type';

const BUTTON_PROPS: {
  title: 'title1' | 'title2' | 'title3';
  link: string;
  image: any;
}[] = [
  {
    link: 'reset',
    title: 'title1',
    image: unlocked,
  },
  {
    link: 'find',
    title: 'title2',
    image: search,
  },
  {
    link: 'reset',
    title: 'title3',
    image: square,
  },
];

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
                  onClick={() => {}}>
                  <AuthModalButton dictionary={dict} />
                </IconButton>
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
      {dict && (
        <div className={styles.login_buttons}>
          {BUTTON_PROPS.map(prop => (
            <div style={{ width: '33.3%' }} key={prop.link}>
              <Button
                className={styles.button}
                variant={'secondary'}
                onClick={() => push(`${lang}/${prop.link}`)}
                type='button'
                style={{ width: '100%' }}
                size={'small'}>
                <div className={styles.button}>
                  <Image src={prop.image} alt='' />
                  <div>{dict.loginButtons[prop.title]}</div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Login;
