import { Pacifico } from 'next/font/google';
import type { FC } from 'react';
import { cn } from '@/shared/utils';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

interface Props {
  className?: string;
}

export const UiLogo: FC<Props> = ({ className }) => {
  return (
    <div className={cn(pacifico.className, className)}>
      <div className='text-ctp-text-500 text-center text-2xl'>Позор Дом</div>
    </div>
  );
};
