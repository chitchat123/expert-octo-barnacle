import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

import { i18n } from '@helpers/i18n';

import type { NextRequest } from 'next/server';

const auth = /\/[\w]+\/(\w+).*/gm;

const isPrivatePath = (s: string) => {
  // @ts-ignore
  const tmp = [...s.matchAll(auth)];
  if (tmp.length > 0 && tmp[0].length > 0) {
    return !['find', 'login', 'reset'].includes(tmp[0][1]);
  }
  return true;
};

const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
};
//TODO fix multiple redirects in middleware
export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('token');
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url) +
        '?' +
        request.nextUrl.searchParams.toString()
    );
  }
  const locale = getLocale(request);

  if (isPrivatePath(pathname) && !token)
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  if (!isPrivatePath(pathname) && token)
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
};

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icons/).*)'],
};
