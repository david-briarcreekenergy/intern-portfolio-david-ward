'use client';

import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HamburgerButtonProps {
  isOpen?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen = false, className, size = 'md', onClick, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    };

    const lineHeight = {
      sm: 'h-0.5',
      md: 'h-0.5',
      lg: 'h-1',
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        onClick={onClick}
        className={cn('relative', className)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        {...props}
      >
        <div
          className={cn(
            'flex flex-col justify-center items-center',
            sizeClasses[size],
          )}
        >
          <span
            className={cn(
              'bg-current transition-all duration-300 ease-in-out w-full',
              lineHeight[size],
              isOpen ? 'rotate-45 translate-y-1' : 'translate-y-0',
            )}
          />
          <span
            className={cn(
              'bg-current transition-all duration-300 ease-in-out w-full my-1',
              lineHeight[size],
              isOpen ? 'opacity-0' : 'opacity-100',
            )}
          />
          <span
            className={cn(
              'bg-current transition-all duration-300 ease-in-out w-full',
              lineHeight[size],
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0',
            )}
          />
        </div>
      </Button>
    );
  },
);

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;
