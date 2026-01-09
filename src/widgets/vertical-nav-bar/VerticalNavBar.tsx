'use client';

import {
  AccessibilityIcon,
  CableIcon,
  CalendarDaysIcon,
  CircleUserIcon,
  LogOutIcon,
  type LucideIcon,
  StoreIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { UiSheet } from '@/shared/components';
import { cn } from '@/shared/components/cn';
import { ROUTES } from '@/shared/config';

interface VerticalNavBarProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

const VerticalNavBarItem: FC<VerticalNavBarProps> = ({ href, label, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className='group flex items-center space-x-3 p-2'>
      <Icon
        className={cn(
          isActive && 'text-amber-500',
          !isActive && 'text-gray-400 group-hover:text-amber-500',
          'szie-5',
        )}
      />
      <div className='font-medium group-hover:text-amber-500'>{label}</div>
    </Link>
  );
};

export const VerticalNavBar: FC = () => {
  return (
    <div className='p-3'>
      <UiSheet className='flex h-full w-56 flex-col px-3 pt-3 pb-1'>
        <Link href={ROUTES.HOME} className='flex items-center space-x-4 pb-4'>
          <div className='rounded-full border border-rose-500 bg-rose-500/10 p-2 shadow-xl backdrop-blur-xl'>
            <AccessibilityIcon className='size-5 text-rose-500' />
          </div>
          <div className='font-bold'>ПозорДом</div>
        </Link>
        <div className='flex flex-col'>
          <VerticalNavBarItem href={ROUTES.USER_DEVICES} label='Устройста' icon={CableIcon} />
          <VerticalNavBarItem href={ROUTES.SHEDULE} label='Расписание' icon={CalendarDaysIcon} />
          <VerticalNavBarItem href={ROUTES.STORE} label='Магазин' icon={StoreIcon} />
          <VerticalNavBarItem href={ROUTES.ACCOUNT} label='Аккаунт' icon={CircleUserIcon} />
        </div>
        <button className='mt-auto flex cursor-pointer items-center gap-2 p-2 hover:text-amber-500'>
          <LogOutIcon className='size-5' />
          <div className='font-medium'>Выйти</div>
        </button>
      </UiSheet>
    </div>
  );
};
