import { cn } from '@/Lib/Utils/Class.utils';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SlotProps {
  path: string;
  isLink: boolean;
  children: ReactNode;
  className?: string;
}

const Slot = ({ isLink, path, children, className }: SlotProps) => {
  if (!isLink) return <>{children}</>;
  return (
    <Link className={cn('flex items-center gap-4', className)} to={path}>
      {children}
    </Link>
  );
};

export default Slot;
