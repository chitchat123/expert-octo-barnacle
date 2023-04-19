'use client';
import React, { FC, useState } from 'react';

import Image from 'next/image';

import { Modal } from '@components/Modal/index';
import { AuthModalButtonProps } from '@components/Modal/type';

import modalIco from 'public/icons/login/_.svg';

export const AuthModalButton: FC<AuthModalButtonProps> = ({ dictionary }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        dictionary={dictionary}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
      <Image
        onClick={() => setShowModal(true)}
        alt={'req'}
        src={modalIco}></Image>
    </>
  );
};
