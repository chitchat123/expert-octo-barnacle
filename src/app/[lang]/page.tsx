import { getDictionary } from '@/helpers/dictionary';

const Home = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang);

  return <div>{dict['title']}</div>;
};

export default Home;
