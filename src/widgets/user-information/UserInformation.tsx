import { UserCircleIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import type { FC } from 'react';
import { type IUser, userService } from '@/entities/user';
import { UiSheet } from '@/shared/ui';

const formatPhoneNumber = (phoneNumber: string): string => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const lastTenDigits = digitsOnly.slice(-10);

  return `+7 (${lastTenDigits.slice(0, 3)}) ${lastTenDigits.slice(3, 6)}-${lastTenDigits.slice(6, 8)}-${lastTenDigits.slice(8, 10)}`;
};

export const UserInformation: FC = async () => {
  const jwtCookie = (await cookies()).get('very-non-secret-cookie');
  const user: IUser = await (await userService.getMe(jwtCookie?.value)).json();

  return (
    <UiSheet className='flex flex-col items-center px-4 py-16'>
      <UserCircleIcon className='mb-4 size-16 stroke-1 text-gray-400' />
      <p className='mb-2 text-lg font-medium'>Имя пользователя</p>
      <p className='text-sm text-gray-300'>{formatPhoneNumber(user.phoneNumber)}</p>
    </UiSheet>
  );
};
