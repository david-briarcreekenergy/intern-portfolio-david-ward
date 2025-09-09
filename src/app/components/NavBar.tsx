import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import HamburgerButton from '@/components/ui/hamburger-button';
import ButtonPrimary from './ButtonPrimary';

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            <ButtonPrimary>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
            </ButtonPrimary>
            <ButtonPrimary>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
            </ButtonPrimary>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>What do you want to see?</SheetTitle>
              <SheetDescription>
                Navigate to different sections of the portfolio
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mt-6 space-y-4">
              <ButtonPrimary>
                <a href="/about">About</a>
              </ButtonPrimary>
              <ButtonPrimary>
                <a href="/projects">Projects</a>
              </ButtonPrimary>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
