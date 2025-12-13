'use client';

import {
  AccessibilityIcon,
  CableIcon,
  CalendarDaysIcon,
  CircleUserIcon,
  StoreIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import { ROUTES } from '@/shared/config';
import { UiSheet } from '@/shared/ui';
import { NavBarItem } from './NavBarItem';

export const NavBar: FC = () => {
  return (
    <div className='fixed bottom-0 z-10 w-full p-3'>
      <UiSheet className='p-2'>
        <nav className='flex items-center justify-around'>
          <NavBarItem href={ROUTES.SHEDULE} icon={CalendarDaysIcon} />
          <NavBarItem href={ROUTES.DEVICES} icon={CableIcon} />
          <Link href={ROUTES.HOME}>
            <div className='rounded-full border border-rose-500 bg-rose-500/10 p-2 shadow-xl backdrop-blur-xl'>
              <AccessibilityIcon className='size-5 text-rose-500' />
            </div>
          </Link>
          <NavBarItem href={ROUTES.STORE} icon={StoreIcon} />
          <NavBarItem href={ROUTES.ACCOUNT} icon={CircleUserIcon} />
        </nav>
      </UiSheet>
    </div>
  );
};
