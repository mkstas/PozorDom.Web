'use client';

import {
  AccessibilityIcon,
  CableIcon,
  CalendarDaysIcon,
  CircleUserIcon,
  type LucideIcon,
  StoreIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { UiSheet } from '@/shared/components';
import { cn } from '@/shared/components/cn';
import { ROUTES } from '@/shared/config';

interface MobileNavBarItemProps {
  href: string;
  icon: LucideIcon;
}

const MobileNavBarItem: FC<MobileNavBarItemProps> = ({ href, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className='group p-2'>
      <Icon
        className={cn(
          isActive && 'text-amber-500',
          !isActive && 'text-gray-400 group-hover:text-amber-500',
          'szie-5',
        )}
      />
    </Link>
  );
};

export const MobileNavBar: FC = () => {
  return (
    <div className='fixed bottom-0 z-10 w-full p-3 md:hidden'>
      <UiSheet className='p-2'>
        <div className='flex items-center justify-around'>
          <MobileNavBarItem href={ROUTES.SHEDULE} icon={CalendarDaysIcon} />
          <MobileNavBarItem href={ROUTES.USER_DEVICES} icon={CableIcon} />
          <Link href={ROUTES.HOME}>
            <div className='rounded-full border border-rose-500 bg-rose-500/10 p-2 shadow-xl backdrop-blur-xl'>
              <AccessibilityIcon className='size-5 text-rose-500' />
            </div>
          </Link>
          <MobileNavBarItem href={ROUTES.STORE} icon={StoreIcon} />
          <MobileNavBarItem href={ROUTES.ACCOUNT} icon={CircleUserIcon} />
        </div>
      </UiSheet>
    </div>
  );
};
