import { Rubik_Wet_Paint } from 'next/font/google';
import type { FC } from 'react';
import { cn } from '@/shared/utils';

const rubikWetPaint = Rubik_Wet_Paint({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

interface Props {
  className?: string;
}

export const UiLogo: FC<Props> = ({ className }) => {
  return (
    <div className={cn(rubikWetPaint.className, className)}>
      <div className='text-center text-3xl text-rose-500'>Позор Дом</div>
    </div>
  );
};
