'use client';

import { ChevronDown } from 'lucide-react';
import { type FC, type ReactNode, useState } from 'react';
import { cn } from '../cn';
import { UiSheet } from './UiSheet';

interface UiAccordionItemProps {
  title: string;
  content: ReactNode;
}

interface UiAccordionProps {
  className?: string;
  items: UiAccordionItemProps[];
}

const UiAccordionItem: FC<UiAccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickButton = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={onClickButton} className='flex w-full cursor-pointer justify-between p-3'>
        <div>{title}</div>
        <ChevronDown className={cn('size-5 text-gray-400', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('border-t border-t-white/10 p-3', !isOpen && 'hidden')}>{content}</div>
    </div>
  );
};

export const UiAccordion: FC<UiAccordionProps> = ({ className, items }) => {
  return (
    <UiSheet className={cn('divide-y divide-white/10', className)}>
      {items.map((item, index) => (
        <UiAccordionItem key={index} {...item} />
      ))}
    </UiSheet>
  );
};
