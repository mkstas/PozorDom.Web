import { BellIcon, CableIcon, HouseIcon } from 'lucide-react';
import { UiSheet } from '@/shared/components';

export default function HomePage() {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <UiSheet className='col-span-2 px-4 py-3'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <div className='text-xl font-semibold'>Расписание</div>
            <div className='text-sm text-gray-300'>День недели</div>
          </div>
          <div className='relative'>
            <BellIcon className='size-6 text-green-500' />
            <div className='absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-full bg-rose-500 text-sm text-gray-900'>
              2
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='mb-1 text-sm text-gray-300'>
            Задач на сегодня: <span className='text-amber-500'>5</span>
          </div>
          <div className='relative h-1 rounded-full bg-gray-500'>
            <div className='absolute h-1 w-1/3 rounded-full bg-rose-500'></div>
          </div>
        </div>
        <div>
          <div>Текущая задача</div>
          <div className='text-sm text-gray-300'>08:00 - 09:00</div>
        </div>
      </UiSheet>
      <UiSheet className='px-4 py-3'>
        <div className='mb-3 flex items-center'>
          <CableIcon className='mr-2 size-5 text-purple-500' />
          <div className='font-semibold'>Устройства</div>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='text-gray-300'>Включены</div>
          <div className='text-green-500'>3</div>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='text-gray-300'>Выключены</div>
          <div className='text-rose-500'>2</div>
        </div>
      </UiSheet>
      <UiSheet className='px-4 py-3'>
        <div className='mb-3 flex items-center'>
          <HouseIcon className='mr-2 size-5 text-amber-500' />
          <div className='font-semibold'>Гостинная</div>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='text-gray-300'>Температура</div>
          <div className='text-sky-500'>22°C</div>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='text-gray-300'>Влажность</div>
          <div className='text-sky-500'>60%</div>
        </div>
      </UiSheet>
    </div>
  );
}
