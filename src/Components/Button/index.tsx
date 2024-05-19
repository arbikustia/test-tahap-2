import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/Lib/Utils/Class.utils';
import { cva, type VariantProps } from 'class-variance-authority';

const ButtonVariants = cva(
  'flex items-center justify-center gap-4 rounded-md font-bold text-white-50 transition-colors',
  {
    variants: {
      size: {
        small: `w-[156px] h-[50px] px-2 py-1 text-md`,
        medium: `w-[400px] h-[70px] px-3 py-1.5 text-xl`,
        large: `w-[530px] h-[78px] px-4 py-2 text-2xl`
      },
      variant: {
        primary: `bg-green-500 enabled:hover:bg-green-700 enabled:active:bg-green-600 disabled:bg-green-200 disabled:opacity-65`,
        secondary: `bg-grey-500 enabled:hover:bg-grey-700 enabled:active:bg-grey-600 disabled:bg-grey-500 disabled:opacity-65`,
        success: `bg-green-500 enabled:hover:bg-green-700 enabled:active:bg-green-600 disabled:bg-green-200 disabled:opacity-65`,
        danger: `bg-red-500 enabled:hover:bg-red-700 enabled:active:bg-red-600 disabled:bg-red-400 disabled:opacity-65`,
        warning: `bg-yellow-500 enabled:hover:bg-yellow-700 enabled:active:bg-yellow-600 disabled:bg-yellow-400 disabled:opacity-65`,
        info: `bg-blue-500 enabled:hover:bg-blue-700 enabled:active:bg-blue-600 disabled:bg-blue-400 disabled:opacity-65`,
        link: `bg-transparent text-blue-500 enabled:hover:underline enabled:active:no-underline disabled:text-gray-300 disabled:opacity-65`,
        'outline-primary': `bg-transparent border-2 border-green-500 text-green-500 enabled:hover:bg-green-500 enabled:hover:text-white-50 enabled:active:bg-green-700 enabled:active:text-white-50 disabled:border-green-800 disabled:text-green-800 disabled:opacity-65`,
        'outline-secondary': `bg-transparent border-2 border-grey-400 text-grey-400 dark:text-white-50 enabled:hover:bg-grey-700 enabled:hover:text-white-50 enabled:hover:border-none enabled:active:bg-grey-600 enabled:hover:text-white-50 enabled:active:border-none disabled:border-grey-500 disabled:text-grey-500 disabled:opacity-65`,
        'outline-danger': `bg-transparent border-2 border-red-500 text-red-500 enabled:hover:bg-red-700 enabled:hover:text-white-50 enabled:hover:border-none enabled:active:bg-red-600 enabled:hover:text-white-50 enabled:hover:border-none disabled:border-red-500 disabled:text-red-500 disabled:opacity-65`,
        'outline-warning': `bg-transparent border-2 border-yellow-500 text-yellow-500 enabled:hover:bg-yellow-700 enabled:hover:text-white-50 enabled:hover:border-none enabled:active:bg-yellow-600 enabled:hover:text-white-50 enabled:hover:border-none disabled:border-yellow-700 disabled:text-yellow-700 disabled:opacity-65`,
        'outline-info': `bg-transparent border-2 border-blue-500 text-blue-500 enabled:hover:bg-blue-700 enabled:hover:text-white-50 enabled:hover:border-none enabled:active:bg-blue-600 enabled:hover:text-white-50 enabled:hover:border-none disabled:border-blue-700 disabled:text-blue-700 disabled:opacity-65`
      }
    },
    defaultVariants: {
      size: 'small',
      variant: 'primary'
    }
  }
);

export type ButtonMode = VariantProps<typeof ButtonVariants>['variant'];

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={cn(ButtonVariants({ className, size, variant }))} />
    );
  }
);

export default Button;
