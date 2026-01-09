import { UserCircleIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import { type IUserEntity, userService } from '@/services/user.service';
import { UserEmailForm } from '@/features/user-email-form';
import { UserInfoForm } from '@/features/user-info-form';
import { UserPhoneForm } from '@/features/user-phone-form/UserPhoneForm';
import { UiAccordion, UiSheet } from '@/shared/components';

function formatPhoneNumber(phone: string): string {
  const clean = phone.replace(/\D/g, '').replace(/^8/, '7');
  return `+7 (${clean.slice(1, 4)}) ${clean.slice(4, 7)}-${clean.slice(7, 9)}-${clean.slice(9, 11)}`;
}

export default async function AccountPage() {
  const jwtCookie = (await cookies()).get('access_token');
  const user: IUserEntity = await (await userService.getMe(jwtCookie?.value)).json();

  return (
    <UiSheet className='p-3'>
      <div className='mb-8 flex items-center space-x-4'>
        <div className='rounded-full bg-gray-300/10 p-2'>
          <UserCircleIcon className='size-10 stroke-1 text-gray-400' />
        </div>
        <div>
          <div>
            <div className='text-lg font-semibold'>{user.fullName ?? ''}</div>
            <div className='text-gray-300'>{formatPhoneNumber(user.phoneNumber)}</div>
          </div>
        </div>
      </div>
      <UiAccordion
        items={[
          { title: 'Номер телефона', content: <UserPhoneForm phoneNumber={user.phoneNumber} /> },
          { title: 'Данные пользователя', content: <UserInfoForm fullName={user.fullName} /> },
          { title: 'Электронная почта', content: <UserEmailForm email={user.email} /> },
        ]}
      />
    </UiSheet>
  );
}
