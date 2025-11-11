import Link from 'next/link';

const footerLinks = [
  {
    title: 'Menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/cocktails', label: 'Cocktails' },
      { href: '/horeca', label: 'Horeca' },
      { href: '/events', label: 'Events' }
    ]
  },
  {
    title: 'Meer',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/over-ons', label: 'Over ons' },
      { href: '/contact', label: 'Contact' },
      { href: '/partner-worden', label: 'Partner worden' }
    ]
  }
];

const socials = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://linkedin.com', label: 'LinkedIn' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Dutch Cocktail Club</p>
          <p className="mt-2 text-sm text-white/70">
            Ready-to-serve cocktailprogramma’s voor horeca, events en thuis.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">{section.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#C47A3A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dutch Cocktail Club</p>
          <div className="flex gap-4">
            {socials.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
