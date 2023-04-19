import React from 'react';

import { Table, TableContent } from '@components';
import { getAttestations } from '@helpers/queries/getAttestations';

import styles from './styles.module.scss';

interface AttestationProps {
  searchParams: { year: number; semester: number };
}

const Attestation = async ({ searchParams }: AttestationProps) => {
  const data = await getAttestations({
    year: searchParams.year,
    semester: searchParams.semester,
  })();
  return (
    <div className={styles.attestationContainer}>
      <Table type={'attestation'}>
        <TableContent type={'attestation'} content={data} />
      </Table>
    </div>
  );
};

export default Attestation;
