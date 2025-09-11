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

const pages = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function NavBar({}: NavBarProps) {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            {pages.map(page => (
              <ButtonPrimary key={page.href}>
                <NavigationMenuItem>
                  <NavigationMenuLink href={page.href}>
                    {page.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </ButtonPrimary>
            ))}
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
              {pages.map(page => (
                <ButtonPrimary key={page.href}>
                  <a href={page.href}>{page.name}</a>
                </ButtonPrimary>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
