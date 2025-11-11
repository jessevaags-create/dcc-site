'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cocktails', label: 'Cocktails' },
  { href: '/horeca', label: 'Horeca' },
  { href: '/events', label: 'Events' },
  { href: '/mocktails', label: 'Mocktails' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' }
];

const megaMenu = [
  {
    title: 'B2B',
    description: 'Schaalbare cocktailprogramma’s voor horeca en events.',
    links: [
      { href: '/horeca', label: 'Voor Horeca' },
      { href: '/events', label: 'Events' },
      { href: '/partner-worden', label: 'Partner worden' }
    ]
  },
  {
    title: 'B2C',
    description: 'D2C shop & proefboxen voor consumenten.',
    links: [
      { href: '/shop', label: 'Shop' },
      { href: '/proefbox', label: 'Proefbox' },
      { href: '/mocktails', label: 'Mocktails' }
    ]
  }
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-serif tracking-wide">
          Dutch Cocktail Club
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative text-sm uppercase tracking-[0.2em] text-white/80 hover:text-white">
                {item.label}
                {active ? (
                  <motion.span layoutId="nav-active" className="absolute -bottom-1 left-0 block h-px w-full bg-[#C47A3A]" />
                ) : null}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <Button asChild size="sm">
            <Link href="/contact">Plan tasting</Link>
          </Button>
        </nav>
        <button
          type="button"
          className="rounded-full border border-white/20 p-2 md:hidden"
          aria-label="Open navigatie"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-black/80 px-4 py-6 md:hidden"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg text-white/90"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 grid gap-4">
              {megaMenu.map((section) => (
                <div key={section.title} className="rounded-2xl border border-white/10 p-4">
                  <p className="font-serif text-lg">{section.title}</p>
                  <p className="text-sm text-white/70">{section.description}</p>
                  <div className="mt-3 space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-[#C47A3A]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
      <div className="hidden border-t border-white/10 bg-black/70 px-4 py-4 md:block">
        <div className="mx-auto flex max-w-6xl gap-6">
          {megaMenu.map((section) => (
            <div key={section.title} className="flex-1">
              <p className="font-serif text-sm uppercase text-white/60">{section.title}</p>
              <p className="text-sm text-white/50">{section.description}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white hover:text-[#C47A3A]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
