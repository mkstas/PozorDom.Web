import { forwardRef, type HTMLProps } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
}

const UiInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, id, label, error, ...updatedProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={id} className='pb-1 text-sm font-medium'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'rounded-xl bg-gray-700/50 px-4 py-2 text-white outline-0 placeholder:text-gray-500 focus:outline-1 focus:outline-amber-500',
          className,
        )}
        {...updatedProps}
      />
      {error && <span className='mt-1 text-sm font-medium text-rose-500'>{error}</span>}
    </div>
  );
});

UiInput.displayName = 'UiInput';

export { UiInput };
