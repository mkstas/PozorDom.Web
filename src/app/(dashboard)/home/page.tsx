import type { Metadata } from 'next';
import { LogoutButton } from './LogoutButton';

export const metadata: Metadata = {
  title: 'Позор Дом | Главная',
};

export default function HomePage() {
  return (
    <div>
      Home
      <LogoutButton />
    </div>
  );
}
