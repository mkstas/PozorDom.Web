import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-gray-800/70 shadow-xl backdrop-blur-xl',
        className,
      )}
    >
      {children}
    </div>
  );
};
