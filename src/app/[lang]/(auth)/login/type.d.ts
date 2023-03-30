import { Locale } from '@helpers/i18n';

interface UserState {
  email: string;
  password: string;
  nickname: string;
}

interface LoginProps {
  params: { lang: Locale };
}
