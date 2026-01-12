import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { type IDeviceEntity, storeService } from '@/services/store.service';
import { UiSheet } from '@/shared/components';
import { ROUTES } from '@/shared/config';

export default async function StorePage() {
  const jwtCookie = (await cookies()).get('access_token');
  const devices: IDeviceEntity[] = await (
    await storeService.getAllDevices(jwtCookie?.value)
  ).json();

  return (
    <UiSheet className='p-3'>
      <div className='mb-6 text-lg font-bold'>Магазин устройств</div>
      <div className='grid grid-cols-6 gap-3'>
        {devices.map(device => (
          <Link
            key={device.id}
            href={`${ROUTES.STORE_DEVICE(device.id)}`}
            className='transition-transform hover:-translate-y-1'
          >
            <UiSheet className='p-3'>
              <Image
                className='aspect-square w-full rounded-xl object-cover'
                src='/device.png'
                alt={device.name}
                width={256}
                height={384}
                unoptimized
                loading='eager'
              />
              <div className='mt-4'>
                <div>{device.name}</div>
                <div className='text-xl font-semibold'>{device.price.toLocaleString()} ₽</div>
              </div>
            </UiSheet>
          </Link>
        ))}
      </div>
    </UiSheet>
  );
}
