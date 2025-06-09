import type React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 py-4 border-b border-border/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/#home" className="text-primary font-bold text-xl">
          DT
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#profile">Profile</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <Button size="sm" variant="outline" asChild>
            <Link href="/Resume copy.pdf" target="_blank">
              Download resume
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Navigation;
