'use client';
import React, { FC, useState } from 'react';

import { BsQuestionCircle } from 'react-icons/bs';

import { Modal } from '@components/Modal/index';
import { AuthModalButtonProps } from '@components/Modal/type';

export const AuthModalButton: FC<AuthModalButtonProps> = ({ dictionary }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        dictionary={dictionary}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
      <BsQuestionCircle size={75} onClick={() => setShowModal(true)} />
    </>
  );
};
