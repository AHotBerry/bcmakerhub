import Link from 'next/link';
import { Hammer } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Resources' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-fuchsia-300">
          <Hammer className="h-5 w-5" />
          BCMaker Hub
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-200">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-fuchsia-300">
              {item.label}
            </Link>
          ))}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-fuchsia-500 px-3 py-1.5 font-medium text-white transition hover:bg-fuchsia-400"
          >
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
