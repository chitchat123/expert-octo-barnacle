import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const head = headers();
  let token = head.get('token');
  if (!token) {
    return NextResponse.json({});
  }

  return await fetch('https://api.campus.kpi.ua/Account/Refresh', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(user => NextResponse.json({ user }))
    .catch(error => NextResponse.json({ error: error }));
  // return NextResponse.json({ fullName: 't' });
};
