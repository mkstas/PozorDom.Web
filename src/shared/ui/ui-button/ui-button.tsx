import type { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/utils';

export const UiButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'bg-ctp-blue-500 hover:bg-ctp-blue-600 text-ctp-crust-500 focus-visible:outline-ctp-blue-500 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium outline-0 outline-offset-2 transition focus-visible:outline-1',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
