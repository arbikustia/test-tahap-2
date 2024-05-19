import { cn } from '@/Lib/Utils/Class.utils';
// import IconHouse from '@/assets/icons/ic-house.svg';
import { cva, type VariantProps } from 'class-variance-authority';
import { Fragment, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbVariants = cva('flex items-center py-3 px-5 gap-4 rounded-lg w-fit', {
  variants: {
    bordered: {
      true: 'border border-grey-50 dark:border-grey-300 bg-white-100 dark:bg-grey-700',
      false: 'bg-white-100 dark:bg-grey-900'
    }
  },
  defaultVariants: {
    bordered: false
  }
});

const BreadcrumbItemVariants = cva('font-medium text-base', {
  variants: {
    active: {
      true: 'text-green-500',
      false: 'text-grey-300'
    },
    bordered: {
      true: 'bg-white-100 dark:bg-grey-700',
      false: ''
    }
  },
  defaultVariants: {
    active: false,
    bordered: false
  }
});

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BreadcrumbVariants> {
  items: BreadcrumbItem[];
}
const BreadCrumb = ({ className, bordered, items, ...props }: BreadcrumbProps) => {
  return (
    <div className='flex flex-row gap-3 text-2xl py-2'>
      {/* <img
        src={IconHouse}
        alt="icon-house"
        width={20}
        height={20}
        className={cn(BreadcrumbItemVariants({ bordered }))}
      /> */}
      {items.map((item, index) => (
        <Fragment key={`breadcrumb-${index}`}>
          <Link
            to={item.path}
            className={cn(
              BreadcrumbItemVariants({ active: index === items.length - 1, bordered })
            )}>
            {item.label}
          </Link>
          {index === items.length - 1 ? null : (
            <p className={cn(BreadcrumbItemVariants({ bordered }))}>{'>'}</p>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
