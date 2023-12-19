'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  {
    name: 'About us',
    href: '/about',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact us',
    href: '/contact',
  },
];

const Header = ({ scrollEffect = true } : { scrollEffect: boolean }) => {
  
  const [scrolled, setScrolled] = useState(!scrollEffect);
  const pathname = usePathname();

  useEffect(() => {
    if(!scrollEffect) return;
    const onScroll = () => setScrolled(window.scrollY > 0);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header
          className={clsx([
            !scrollEffect && 'bg-white shadow-lg',
            scrolled ? 'bg-white shadow-lg' : 'bg-transparent',
            'transition-all duration-300 ease-in-out fixed w-full z-50',
          ])}
      >
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link href="/" className="flex title-font font-bold items-center text-primary mb-4 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="ml-3 text-xl">SSR Connect</span>
              </Link>
              <nav className="md:ml-auto flex gap-6 flex-wrap items-center justify-center mr-6 text-color">
                  {MENU_ITEMS.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className={clsx([
                            'hover:text-primary cursor-pointer',
                            'transition-all duration-300 ease-in-out',
                            item.href === pathname && 'text-primary',
                          ])}
                      >
                          {item.name}
                      </Link>
                  ))}
              </nav>
              <Link href="/dashboard" className="inline-flex items-center bg-primary border-0 py-2 px-4 hover:bg-primary/80 rounded-lg text-base text-primaryTextColor">
                  Member Portal
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
              </Link>
          </div>
      </header>
  );
};

export default Header;
