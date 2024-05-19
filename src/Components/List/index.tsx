import { Link, type LinkProps } from 'react-router-dom';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/Lib/Utils/Class.utils';
import { HTMLAttributes } from 'react';
import { listChildVariants, listVariants } from '@/Lib/Variants/List.variants';

interface ListProps
  extends HTMLAttributes<HTMLAnchorElement>,
    LinkProps,
    VariantProps<typeof listVariants> {
  image?: string;
  title: string;
}
const List = ({ image, title, isActive, className, ...props }: ListProps) => {
  return (
    <Link className={cn(listVariants({ isActive, className }))} {...props}>
      {image ? (
        <img
          src={image}
          width={32}
          height={32}
          alt={`icon-${title}`}
          className={cn(listChildVariants({ isOpenSidebar: true }))}
        />
      ) : null}
      <p className={cn(listChildVariants({ isOpenSidebar: true }))}>{title}</p>
    </Link>
  );
};

export default List;
