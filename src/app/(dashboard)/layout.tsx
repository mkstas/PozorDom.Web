import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { userService } from '@/services/user.service';
import { VerticalNavBar } from '@/widgets/vertical-nav-bar';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jwtCookie = (await cookies()).get('access_token');
  const res = await userService.getMe(jwtCookie?.value);

  if (res.status === 401) notFound();

  return (
    <div className='flex min-h-screen'>
      <VerticalNavBar />
      <div className='container mx-auto p-3'>{children}</div>
    </div>
  );
}
