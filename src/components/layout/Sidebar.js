'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  {
    label: 'Home',
    href: '/',
    section: 'about',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/projects',
    section: 'works',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  // {
  //   label: 'Work',
  //   href: '/work',
  //   section: 'work',
  //   icon: (
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  //       <rect x="2" y="7" width="20" height="14" rx="2" />
  //       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  //     </svg>
  //   ),
  // },
  {
    label: 'Blog',
    href: '/blog',
    section: 'writing',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/coffeecookey',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/coffeecookey',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tanisha-ojha-6bb1b0203/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    if (!isHome) return
    const sections = navItems.map((i) => i.section)
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '0px 0px -70% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [isHome])

  const isActive = (item) => {
    if (isHome) return activeSection === item.section
    if (item.href === '/') return false
    return pathname.startsWith(item.href)
  }

  const handleNavClick = (e, item) => {
    if (isHome) {
      e.preventDefault()
      document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' })
    }
    // else let the Link navigate normally
  }

  return (
    <aside className="sidebar flex flex-col py-8 px-5">
      {/* Brand */}
      <div className="mb-10">
        <Link href="/">
          <p className="font-serif italic text-[1.05rem] font-semibold text-maroon leading-tight">
            The Portfolio
          </p>
          <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint mt-1 font-sans">
            Tanisha Ojha
          </p>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`flex items-center gap-3 py-2.5 px-4 text-sm transition-colors duration-150 group rounded-sm
                  ${isActive(item)
                    ? 'text-maroon font-medium border-l-2 border-maroon pl-[calc(1rem-2px)]'
                    : 'text-ink-muted hover:text-ink hover:bg-surface border-l-2 border-transparent'
                  }`}
              >
                <span className={isActive(item) ? 'text-maroon' : 'text-ink-faint group-hover:text-ink-muted'}>
                  {item.icon}
                </span>
                <span className="font-sans">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social + footer */}
      <div className="mt-8 pt-5 border-t border-border">
        <div className="flex items-center gap-3 px-4 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-ink-faint hover:text-maroon transition-colors duration-150"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-[0.65rem] text-ink-faint px-4 font-sans">
          © 2024 Tanisha Ojha
        </p>
      </div>
    </aside>
  )
}
