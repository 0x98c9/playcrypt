import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl md:text-3xl">🔐</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold emoji-gradient bg-clip-text text-transparent">
              Playcrypt
            </span>
            <Badge variant="secondary" className="ml-2 text-xs sm:text-sm hidden sm:inline-flex py-1 px-2">
              Beta
            </Badge>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <Link to="/about">
            <Button variant="ghost" size="sm" className="text-sm md:text-base hover:scale-105 transition-all duration-200">
              About
            </Button>
          </Link>
          <Link to="/privacy">
            <Button variant="ghost" size="sm" className="text-sm md:text-base hover:scale-105 transition-all duration-200">
              Privacy
            </Button>
          </Link>
          <Link to="/terms">
            <Button variant="ghost" size="sm" className="text-sm md:text-base hover:scale-105 transition-all duration-200">
              Terms
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="pb-8">
              <div className="flex flex-col gap-4 mt-6 px-6">
                <Link to="/about" onClick={() => (document.activeElement as HTMLElement | null)?.blur?.()}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    About
                  </Button>
                </Link>
                <Link to="/privacy" onClick={() => (document.activeElement as HTMLElement | null)?.blur?.()}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    Privacy
                  </Button>
                </Link>
                <Link to="/terms" onClick={() => (document.activeElement as HTMLElement | null)?.blur?.()}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    Terms
                  </Button>
                </Link>
                <DrawerClose asChild>
                  <Button variant="outline" className="mt-4 w-full">Close</Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
