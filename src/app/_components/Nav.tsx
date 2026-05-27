'use client';

import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const navLinks = [
  { title: 'Background', href: '#background', id: 'background' },
  { title: 'Defining Moments', href: '#defining-moments', id: 'defining-moments' },
  { title: 'The Argument', href: '#the-argument', id: 'the-argument' },
  { title: 'Modern Legacy', href: '#modern-legacy', id: 'modern-legacy' },
  { title: 'Works Cited', href: '#works-cited', id: 'works-cited' },
];

export function Nav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // NavigationMenu renders as <nav> with role="navigation" from Radix
    <NavigationMenu
      viewport={false}
      aria-label='Exhibit sections'
      className='sticky top-0 z-50 w-full max-w-full bg-card border-b border-border justify-start rounded-none'
    >
      <div className='max-w-7xl mx-auto w-full px-6 h-14 flex items-center justify-between gap-8'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='font-display text-sm text-foreground leading-none shrink-0 cursor-pointer'
        >
          <span className='inline-flex items-center gap-2'>
            <span className='leading-none'>📻</span>
            <span>Tune In: How Radio Defined America</span>
          </span>
        </button>

        {/* NavigationMenuList provides role="menubar" + keyboard arrow-key nav */}
        <NavigationMenuList className='hidden md:flex gap-1'>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink href={link.href} active={activeId === link.id}>
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
