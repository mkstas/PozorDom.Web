'use client';

import { redirect } from 'next/navigation';
import { userService } from '@/entities/user';
import { ROUTES } from '@/shared/config';

export const LogoutButton = () => {
  const onCLickButton = async () => {
    userService.logout();

    redirect(ROUTES.LOGIN);
  };

  return <button onClick={onCLickButton}>Выйти</button>;
};
