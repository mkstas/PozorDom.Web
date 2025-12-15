import { SettingsIcon, UserCircleIcon, UserPenIcon } from 'lucide-react';
import { UiSheet } from '@/shared/components';

export default function AccountPage() {
  return (
    <UiSheet className='px-3 py-16'>
      <div className='mb-6 flex flex-col items-center'>
        <div className='mb-4 rounded-full bg-gray-300/10 p-3'>
          <UserCircleIcon className='size-12 stroke-1 text-gray-400' />
        </div>
        <div className='mb-1 text-lg font-semibold'>Имя пользователя</div>
        <div className='text-gray-300'>+7 (900) 000-00-00</div>
      </div>
      <div className='flex justify-center gap-6'>
        <div className='flex w-full max-w-28 flex-col items-center rounded-xl bg-gray-300/10 px-6 py-3'>
          <UserPenIcon className='mb-1 size-5 text-gray-400' />
          <div className='text-sm'>Данные</div>
        </div>
        <div className='flex w-full max-w-28 flex-col items-center rounded-xl bg-gray-300/10 px-6 py-3'>
          <SettingsIcon className='mb-1 size-5 text-gray-400' />
          <div className='text-sm'>Настройки</div>
        </div>
      </div>
    </UiSheet>
  );
}
