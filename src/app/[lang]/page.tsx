import { redirect } from 'next/navigation';

interface HomeProps {}

const Home = async ({}: HomeProps) => {
  redirect('/login');

  return;
};
export default Home;
