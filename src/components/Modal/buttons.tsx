'use client';
import React, { FC, useState } from 'react';

import { Modal } from '@components/Modal/index';
import { AuthModalButtonProps } from '@components/Modal/type';

export const AuthModalButton: FC<AuthModalButtonProps> = ({
  dictionary,
  img,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        dictionary={dictionary}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
      <div onClick={() => setShowModal(true)}>{img}</div>
    </>
  );
};
