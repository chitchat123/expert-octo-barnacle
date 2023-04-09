'use client';

import React, { FC } from 'react';

import styles from './styles.module.scss';

interface AttestationProps {}

const Attestation: FC<AttestationProps> = ({}) => {
  return <div className={styles.attestationContainer}>Attestation</div>;
};

export default Attestation;
