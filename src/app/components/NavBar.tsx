import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
