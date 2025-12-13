import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { NavBar } from '@/widgets/nav-bar';
import { userService } from '@/entities/user';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jwtCookie = (await cookies()).get('very-non-secret-cookie');
  if (!jwtCookie) notFound();

  const res = await userService.check(jwtCookie.value);
  if (res.status === 401) notFound();

  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
