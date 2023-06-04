'use client';
import React, { FC, useState } from 'react';

import { useRouter } from 'next/navigation';

import { TextInput } from '@components/inputs';
import Loader from '@components/Loader';
import CuratorItem from '@components/СuratorItem';

import { FindProps } from '@app/[lang]/(auth)/find/type';
import { useDictionary } from '@helpers/useDictionary';
import search from 'public/icons/login/search.svg';
import { Button } from 'src/components/buttons/Button';

import styles from './styles.module.scss';

const Find: FC<FindProps> = ({ params: { lang } }) => {
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
  const dict = useDictionary(lang);
  const [curator, setCurator] = useState('');
  const router = useRouter();
  const [filteredCurators, setFilteredCurators] = useState(testCurator);

  return (
    <div className={styles.findCuratorContainer}>
      {dict == undefined ? (
        <Loader />
      ) : (
        <div className={styles.findPageContent}>
          <h3 className={styles.title}>{dict?.find.title}</h3>
          <TextInput
            iconPosition={'left'}
            iconItem={search}
            label={dict?.find.placeholder || ''}
            name={'find_curator'}
            value={curator}
            onChange={(e: { target: HTMLInputElement }) => {
              const value = e.target.value.toLowerCase();
              setCurator(value);
              setFilteredCurators(
                testCurator.filter(curator =>
                  curator.group.toLowerCase().includes(value)
                )
              );
            }}
          />
          <div className={styles.curatorsItem}>
            {filteredCurators.length > 0 ? (
              filteredCurators.map((el, k) => (
                <CuratorItem
                  key={k}
                  name={el.name}
                  department={el.department}
                  group={el.group}
                />
              ))
            ) : (
              <p>{dict?.find.noResults}</p>
            )}
          </div>
          <Button className={styles.button} onClick={() => router.back()}>
            {dict?.find.buttonTitle}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Find;
