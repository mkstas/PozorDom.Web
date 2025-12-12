import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  return <div className={cn('bg-ctp-crust-500 rounded-2xl p-3', className)}>{children}</div>;
};
