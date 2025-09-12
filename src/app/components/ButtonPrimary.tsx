import { Button } from '@/components/ui/button';
import { ReactNode, forwardRef } from 'react';

interface ButtonPrimaryProps {
  children: ReactNode;
}

const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ children }, ref) => {
    return (
      <Button
        ref={ref}
        asChild
        variant="default"
        className="font-mono text-white cursor-pointer hover:text-emerald-300 text-md md:text-md lg:text-lg"
      >
        {children}
      </Button>
    );
  },
);

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;
