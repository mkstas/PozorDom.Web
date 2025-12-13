import { AccessibilityIcon } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '@/shared/ui/cn';

interface Props {
  className?: string;
}

export const UiLogoBadge: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'rounded-full border border-rose-500 bg-rose-500/10 p-4 shadow-xl backdrop-blur-xl',
        className,
      )}
    >
      <AccessibilityIcon className='size-8 text-rose-500' />
    </div>
  );
};
