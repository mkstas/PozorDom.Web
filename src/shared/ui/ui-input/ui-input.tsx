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
        <label htmlFor={id} className='text-ctp-subtext1-500 pb-1 text-sm font-medium'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'bg-ctp-base-500 outline-ctp-blue-500 text-ctp-text-500 placeholder:text-ctp-subtext3-500 input-no-autofill-bg rounded-xl px-4 py-2 outline-0 focus:outline-1',
          className,
        )}
        {...updatedProps}
      />
      {error && <span className='text-ctp-red-500 mt-1 text-sm font-medium'>{error}</span>}
    </div>
  );
});

UiInput.displayName = 'UiInput';

export { UiInput };
