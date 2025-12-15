import Image from 'next/image';
import { UiSheet } from '@/shared/components';

export default function StorePage() {
  return (
    <div>
      <div className='mb-6 text-xl font-semibold'>Магазин устройств</div>
      <div className='mb-6 space-y-2'>
        <div className='text-lg font-semibold text-gray-300'>Хабы</div>
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
              <div className='flex-1'>
                <div className='font-medium'>Название хаба</div>
                <div className='text-sm text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className='text-xl font-medium'>3 999 ₽</div>
            </div>
          </UiSheet>
        </div>
      </div>
      <div className='space-y-2'>
        <div className='text-xl font-semibold'>Умные устройства</div>
        <div>
          <UiSheet className='flex space-x-4 p-3'>
            <Image
              width={384}
              height={256}
              src='/device.png'
              alt='Image of devcie'
              className='size-24 rounded-xl object-cover'
            />
            <div className='flex flex-col'>
              <div className='flex-1'>
                <div className='font-medium'>Умное устройство</div>
                <div className='text-sm text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className='text-xl font-medium'>3 999 ₽</div>
            </div>
          </UiSheet>
        </div>
      </div>
    </div>
  );
}
