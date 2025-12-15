import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { deviceService, type IDevice } from '@/entities/device';
import { ROUTES } from '@/shared/config';
import { UiSheet } from '@/shared/ui';

export const DeviceCardList: FC = async () => {
  const devices: IDevice[] = await (await deviceService.getAll()).json();

  return (
    <div className='space-y-3'>
      {devices.map(d => (
        <Link className='block' key={d.id} href={ROUTES.STORE}>
          <UiSheet className='flex space-x-4 p-3'>
            <Image
              width={384}
              height={256}
              className='h-24 w-24 rounded-xl object-cover'
              src='/device.png'
              alt='Image of device'
              loading='eager'
            />
            <div className='grid grid-rows-[1fr_auto]'>
              <div>
                <h3 className='font-bold'>{d.name}</h3>
                <p className='text-sm text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className='text-xl font-bold'>{d.price.toLocaleString('ru-RU')} ₽</div>
            </div>
          </UiSheet>
        </Link>
      ))}
    </div>
  );
};
