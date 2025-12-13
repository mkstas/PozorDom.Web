import type { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/ui/cn';

export const UiButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-xl bg-amber-500 px-4 py-2 font-medium text-gray-900 outline-0 transition-colors hover:bg-amber-400 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-amber-500',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
