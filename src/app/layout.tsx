import React from 'react';

export const metadata = {
  title: '[DEV] Електронний кампус КПІ ім. Ігоря Сікорського',
  description:
    'Система підтримки навчального процесу Національниго Технічного Університету України "Київський політехнічний інститут імені Ігоря Сікорського"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
