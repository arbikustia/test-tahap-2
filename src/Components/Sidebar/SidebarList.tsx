// import { Link } from 'react-router-dom';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/Lib/Utils/Class.utils';
import { HTMLAttributes, useState } from 'react';
import {
  DropdownVariants,
  HoverMode,
  listChildVariants,
  listVariants
} from '@/Lib/Variants/List.variants';
import Arrow from '../Icon/Arrow';
import Slot from '../Slot';
import List from '../List';
import { Sidebar } from '@/Types/Sidebar.types';

interface SidebarListProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof listVariants>,
    Sidebar {}

const SidebarList = ({
  image,
  title,
  isActive,
  child,
  path,
  className,
  onClick,
  ...props
}: SidebarListProps) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        className={cn(
          listVariants({ isActive, className }),
          HoverMode({ mode: 'primary' }),
          'text-lg font-bold'
        )}
        onClick={(e) => {
          onClick?.(e);
          setShow((show) => !show);
        }}
        {...props}>
        <Slot path={path!} isLink={!child}>
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
          {child ? (
            <Arrow
              mode={'default'}
              className={cn(`absolute right-2 transition-all duration-300`, !show && 'rotate-180')}
            />
          ) : null}
        </Slot>
      </div>
      {child ? (
        <div className={cn(DropdownVariants({ show }), HoverMode({ mode: 'primary' }))}>
          <div className="overflow-hidden">
            {child.map((item, index) => (
              <List
                key={`child-sidebar-${index}`}
                className="py-1 pl-14 text-md font-medium overflow-hidden"
                to={item.path}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SidebarList;
