'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-off-white border-t border-border z-50 flex items-center justify-around px-4 py-3">
      {navItems.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xs font-sans tracking-wide transition-colors ${active ? 'text-maroon font-medium' : 'text-ink-faint'}`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
