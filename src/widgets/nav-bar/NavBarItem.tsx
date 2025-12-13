'use client';

import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { cn } from '@/shared/ui/cn';

interface Props {
  href: string;
  icon: LucideIcon;
}

export const NavBarItem: FC<Props> = ({ href, icon: Icon }) => {
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
