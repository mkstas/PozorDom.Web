import { Rubik } from 'next/font/google';
import type { ReactNode } from 'react';
import './main.css';

const onest = Rubik({
  subsets: ['cyrillic-ext', 'latin-ext'],
});

export default function IndexLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
        {children}
      </body>
    </html>
  );
}
