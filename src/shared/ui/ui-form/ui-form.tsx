import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export const UiForm: FC<Props> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn('grid gap-y-3', className)}>
      {children}
    </form>
  );
};
