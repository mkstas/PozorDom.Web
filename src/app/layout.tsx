import { Onest } from 'next/font/google';
import type { ReactNode } from 'react';
import './main.css';

const onest = Onest({
  subsets: ['cyrillic-ext', 'latin-ext'],
});

export default function IndexLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-ctp-mantle-500 p-3'>{children}</body>
    </html>
  );
}
