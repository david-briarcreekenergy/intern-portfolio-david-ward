import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface ButtonPrimaryProps {
  children: ReactNode;
}

export default function ButtonPrimary({ children }: ButtonPrimaryProps) {
  return (
    <Button
      asChild
      variant="default"
      className="text-white bg-green-800 focus:bg-green-800 hover:bg-green-800 hover:ring-2 hover:ring-green-400 focus:ring-2 focus:ring-green-400"
    >
      {children}
    </Button>
  );
}
