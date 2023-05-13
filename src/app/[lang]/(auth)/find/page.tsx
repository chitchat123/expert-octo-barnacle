'use client';
import React, { FC, useState } from 'react';

import { TextInput } from '@components/inputs';
import Loader from '@components/Loader';
import CuratorItem from '@components/СuratorItem';

import { FindProps } from '@app/[lang]/(auth)/find/type';
import { useDictionary } from '@helpers/useDictionary';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const Find: FC<FindProps> = ({ params: { lang } }) => {
  const dict = useDictionary(lang);
  const [curator, setCurator] = useState('');
  let testCurator = [
    {
      name: 'Кононова Ірина Віталіївна',
      group: 'TI-92',
      department:
        'Кафедра інженерії програмного забезпечення в енергетиці ІАТЕ',
    },
    {
      name: 'Кононова Ірина Віталіївна',
      group: 'TI-92',
      department:
        'Кафедра інженерії програмного забезпечення в енергетиці ІАТЕ',
    },
    {
      name: 'Кононова Ірина Віталіївна',
      group: 'TI-92',
      department:
        'Кафедра інженерії програмного забезпечення в енергетиці ІАТЕ',
    },
    {
      name: 'Кононова Ірина Віталіївна',
      group: 'TI-92',
      department:
        'Кафедра інженерії програмного забезпечення в енергетиці ІАТЕ',
    },
  ];

  return (
    <div className={styles.findCuratorContainer}>
      {dict == undefined ? (
        <Loader />
      ) : (
        <div className={styles.findPageContent}>
          <h3 className={styles.title}>{dict?.find.title}</h3>
          <TextInput
            label={dict?.find.placeholder || ''}
            name={'find_curator'}
            value={curator}
            onChange={(e: { target: HTMLInputElement }) =>
              setCurator(e.target.value)
            }
          />
          <div className={styles.curatorsItem}>
            {testCurator.map((el, k) => (
              <CuratorItem
                key={k}
                name={el.name}
                department={el.department}
                group={el.group}
              />
            ))}
          </div>
          <Button className={styles.button} variant={'secondary'} onClick={''}>
            {dict?.find.buttonTitle}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Find;
