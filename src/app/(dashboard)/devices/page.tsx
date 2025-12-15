import { ZapIcon } from 'lucide-react';
import Image from 'next/image';
import { UiSheet } from '@/shared/components';

export default function DevicesPage() {
  return (
    <div>
      <div className='mb-6 text-xl font-semibold'>Устройства</div>
      <div className='space-y-3'>
        <UiSheet className='flex space-x-4 p-3'>
          <Image
            width={384}
            height={256}
            src='/device.png'
            alt='Image of devcie'
            className='size-24 rounded-xl object-cover'
          />
          <div className='flex flex-col'>
            <div className='font-medium'>Пользовательское название</div>
            <div className='text-sm text-gray-300'>Название устройства</div>
            <div className='mb-1 flex items-center space-x-1'>
              <ZapIcon className='size-4 text-amber-300' />
              <div className='text-sm text-gray-300'>0.3 кВт</div>
            </div>
            <div>
              Состояние: <span className='text-green-500'>Включено</span>
            </div>
          </div>
        </UiSheet>
        <UiSheet className='flex space-x-4 p-3'>
          <Image
            width={384}
            height={256}
            src='/device.png'
            alt='Image of devcie'
            className='size-24 rounded-xl object-cover'
          />
          <div className='flex flex-col'>
            <div className='font-medium'>Пользовательское название</div>
            <div className='text-sm text-gray-300'>Название устройства</div>
            <div className='mb-1 flex items-center space-x-1'>
              <ZapIcon className='size-4 text-amber-300' />
              <div className='text-sm text-gray-300'>0.0 кВт</div>
            </div>
            <div>
              Состояние: <span className='text-rose-500'>Выключено</span>
            </div>
          </div>
        </UiSheet>
      </div>
    </div>
  );
}
