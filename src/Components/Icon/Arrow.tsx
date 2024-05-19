import { cn } from '@/Lib/Utils/Class.utils';
import { IconVariant } from '@/Lib/Variants/Icon.variants';
import { IconProps } from '@/Types/Icon.types';
import { forwardRef } from 'react';

interface ArrowProps extends IconProps {}

const Arrow = forwardRef<SVGSVGElement, ArrowProps>(({ mode, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/arrow-up">
        <g id="arrow-up">
          <path
            id="Vector"
            d="M16.6 12.5417L11.1667 7.10833C10.525 6.46666 9.475 6.46666 8.83334 7.10833L3.4 12.5417"
            className={cn(IconVariant({ strokeMode: mode }))}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
});

export default Arrow;
