import { cva } from 'class-variance-authority';

export const listVariants = cva('relative w-full flex items-center p-2 gap-4 rounded-sm', {
  variants: {
    isActive: {
      true: 'bg-blue-500',
      false: ''
    }
  },
  defaultVariants: {
    isActive: false
  }
});

export const listChildVariants = cva('transition-all duration-300', {
  variants: {
    isOpenSidebar: {
      true: 'opacity-100',
      false: 'opacity-0'
    }
  }
});

export const DropdownVariants = cva(
  'w-full grid overflow-hidden transition-all duration-300 -my-2 ease-in-out',
  {
    variants: {
      show: {
        true: 'grid-rows-[1fr] opacity-100',
        false: 'grid-rows-[0fr] opacity-0'
      }
    }
  }
);

export const HoverMode = cva('', {
  variants: {
    mode: {
      primary: 'group hover:cursor-pointer hover:bg-green-100 dark:hover:bg-green-900',
      danger: 'group hover:cursor-pointer hover:bg-red-100 dark:hover:bg-red-900',
      warning: 'group hover:cursor-pointer hover:bg-yellow-100 dark:hover:bg-yellow-900',
      info: 'group hover:cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900',
      default: 'group hover:cursor-pointer hover:bg-grey-100 dark:hover:bg-grey-900'
    }
  }
});
