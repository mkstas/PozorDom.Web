import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/components/cn';

interface Props extends PropsWithChildren {
  className?: string;
  method?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const UiForm: FC<Props> = ({ children, className, method = 'POST', onSubmit }) => {
  return (
    <form method={method} onSubmit={onSubmit} className={cn(className)}>
      {children}
    </form>
  );
};
