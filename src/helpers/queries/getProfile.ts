import * as process from 'process';

import { faker } from '@faker-js/faker';

import { delay } from '@helpers/delay';

export const getProfile = async () => {
  return delay(parseInt(process.env.DELAY || '0')).then(() => ({
    contacts: ['Пошта', 'Моб. номер:', 'Telegram:', 'Веб-сайт:'].map(el => ({
      type: el,
      val: faker.internet.email(),
    })),
    profile: {
      institute: 'Інститут телекомунікаційних систем',
      group: 'ТІ-92',
      studyForm: 'Очна (денна)',
      course: '4',
      profile: 'Телекомунікацій та радіотехніка 172',
      status: 'Навчається',
    },
  }));
};
