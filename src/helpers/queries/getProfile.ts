import { faker } from '@faker-js/faker';

export const getProfile = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {})
    .then(res => res.json())
    .then(() => ({
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
