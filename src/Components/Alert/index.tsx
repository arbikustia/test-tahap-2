import { cva, type VariantProps } from 'class-variance-authority';
import Button, { ButtonMode } from '../Button';
import Check from '../Icon/Check';
import { cn } from '@/Lib/Utils/Class.utils';
import { HTMLAttributes, forwardRef } from 'react';

const AlertVariants = cva('flex flex-col gap-1 p-4 w-[896px] rounded-lg', {
  variants: {
    mode: {
      success: 'bg-green-50 dark:bg-green-900 dark:border dark:border-green-500',
      danger: 'bg-red-50 dark:bg-red-900 dark:border dark:border-red-500',
      info: 'bg-blue-50 dark:bg-blue-900 dark:border dark:border-blue-500',
      warning: 'bg-yellow-50 dark:bg-yellow-900 dark:border dark:border-yellow-500',
      default: 'bg-white-50 dark:bg-grey-700 dark:border dark:border-white-800'
    }
  },
  defaultVariants: {
    mode: 'default'
  }
});

const AlertTextVariants = cva('text-left dark:text-white-50 dark:text-white-50 text-md', {
  variants: {
    mode: {
      success: 'text-green-500',
      danger: 'text-red-500',
      info: 'text-blue-500',
      warning: 'text-yellow-600',
      default: 'text-grey-500'
    }
  }
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AlertVariants> {
  title: string;
  message: string;
  action?: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, title, message, mode = 'default', action, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(AlertVariants({ mode, className }))}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Check mode={mode} />
            <p className={cn(AlertTextVariants({ mode }), 'font-bold')}>{title}</p>
          </div>
        </div>
        <p className={cn(AlertTextVariants({ mode }), 'mb-3')}>{message}</p>
        {action ? (
          <Button
            onClick={action}
            variant={mode === 'default' ? 'secondary' : (mode as ButtonMode)}>
            View More
          </Button>
        ) : null}
      </div>
    );
  }
);

export default Alert;
