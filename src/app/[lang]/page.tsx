import { getDictionary } from '@/helpers/dictionary';
import { Locale } from '@helpers/i18n';

interface HomeProps {
  params: {
    lang: Locale;
  };
}

const Home = async ({ params: { lang } }: HomeProps) => {
  const dict = await getDictionary(lang);

  return <div>{dict.title}</div>;
};
export default Home;
