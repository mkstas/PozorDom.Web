import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { userService } from '@/entities/user';
import { LogoutButton } from './LogoutButton';

export const metadata: Metadata = {
  title: 'Позор Дом | Главная',
};

export default async function HomePage() {
  const jwtCookie = (await cookies()).get('very-non-secret-cookie');
  if (!jwtCookie) notFound();

  const res = await userService.check(jwtCookie.value);
  if (res.status === 401) notFound();

  return (
    <div>
      Home
      <LogoutButton />
    </div>
  );
}
