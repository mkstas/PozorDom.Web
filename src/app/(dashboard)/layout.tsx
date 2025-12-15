import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { userService } from '@/services/user.service';
import { NavBar } from '@/widgets/nav-bar';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jwtCookie = (await cookies()).get('very-non-secret-cookie');
  const res = await userService.getMe(jwtCookie?.value);

  if (res.status === 401) notFound();

  return (
    <>
      <div className='p-3'>{children}</div>
      <NavBar />
    </>
  );
}
