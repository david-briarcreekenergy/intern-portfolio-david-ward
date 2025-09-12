'use client';

import { useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet';
import HamburgerButton from '@components/ui/hamburger-button';
import ButtonPrimary from './ButtonPrimary';
import Link from 'next/link';
import Image from 'next/image';
import GitHubLogo from '@public/logos/github-mark-white.png';
import LinkedInLogo from '@public/logos/InBug-White.png';

interface NavBarProps {
  className?: string;
}

const pages = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const navLinkClass =
  'p-2 font-mono text-lg text-center text-white bg-black cursor-pointer hover:text-emerald-300 md:text-md lg:text-lg rounded-xl';

const logoLinkClass =
  'p-2 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-emerald-300';

export default function NavBar({}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
            <Link href="https://github.com/david-briarcreekenergy">
              <Image
                src={GitHubLogo}
                alt="GitHub Logo"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/david-ward-51859a306/">
              <Image
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                width={30}
                height={30}
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <HamburgerButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mt-6 space-y-4">
              <Link href="/" className={navLinkClass} onClick={handleLinkClick}>
                Home
              </Link>
              {pages.map(page => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={navLinkClass}
                  onClick={handleLinkClick}
                >
                  {page.name}
                </Link>
              ))}
              <div className="flex justify-center pt-4 mt-6 space-x-8">
                <Link href="https://github.com/david-briarcreekenergy">
                  <Image
                    src={GitHubLogo}
                    alt="GitHub Logo"
                    width={50}
                    height={50}
                    className={logoLinkClass}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/david-ward-51859a306/">
                  <Image
                    src={LinkedInLogo}
                    alt="LinkedIn Logo"
                    width={50}
                    height={50}
                    className="p-2 bg-gray-800 rounded-md hover:bg-gray-700"
                  />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
