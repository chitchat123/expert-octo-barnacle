import React from 'react';

export default function WebSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}