import { useState } from 'react';
import Arrow from '../Icon/Arrow';
import { DropdownVariants } from '@/Lib/Variants/List.variants';
import { cn } from '@/Lib/Utils/Class.utils';

export interface AccordionProps {
  title: string;
  content: string;
  image?: string;
}
const Accordion = ({ title, content, image }: AccordionProps) => {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col">
      <div
        className="relative p-5 flex items-center border border-white-600 dark:border-grey-400 bg-grey-50 dark:bg-grey-700 rounded"
        onClick={() => setShow((show) => !show)}>
        {image && <img src={image} width={32} height={32} alt="icon-accordion" />}
        <p className="">{title}</p>
        <Arrow
          mode={'default'}
          className={cn(`absolute right-5 transition-all duration-300`, !show && 'rotate-180')}
        />
      </div>
      <div
        className={cn(
          DropdownVariants({ show }),
          `border border-white-600 dark:border-grey-400 p-5 rounded border-t-0`
        )}>
        <div className="overflow-hidden">
          <div className={`w-full mb-2 transition-colors duration-300 overflow-hidden`}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
