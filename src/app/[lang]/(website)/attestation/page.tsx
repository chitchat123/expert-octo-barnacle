import React from 'react';

import TableContent from '@components/Table/TableContent';

import { getAttestations } from '@helpers/queries/getAttestations';

import Table from '../../../../components/Table';

import styles from './styles.module.scss';

interface AttestationProps {
  searchParams: { year: number; semester: number };
}

const Attestation = async ({ searchParams }: AttestationProps) => {
  const data = await getAttestations({
    year: searchParams.year,
    semester: searchParams.semester,
  })();
  console.info(searchParams);
  return (
    <div className={styles.attestationContainer}>
      <Table type={'attestation'}>
        <TableContent type={'attestation'} content={data} />
      </Table>
    </div>
  );
};

export default Attestation;
