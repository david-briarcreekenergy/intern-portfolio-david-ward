import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import ButtonPrimary from './ButtonPrimary';
interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6">
        <ButtonPrimary>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </ButtonPrimary>
        <ButtonPrimary>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
          </NavigationMenuItem>
        </ButtonPrimary>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
