import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/ui/cn';

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const UiForm: FC<Props> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn(className)}>
      {children}
    </form>
  );
};
