'use client'

import { useEffect, useState } from 'react'

export default function TableOfContents({ headings }) {
  const [active, setActive] = useState(headings[0]?.id)

  useEffect(() => {
    const observers = headings.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '0px 0px -70% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [headings])

  if (!headings.length) return null

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-16">
        <p className="text-[0.6rem] uppercase tracking-widest text-ink-faint font-sans mb-4">
          On this page
        </p>
        <ul className="space-y-2 border-l border-border">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`block text-xs font-sans leading-snug transition-colors duration-150 py-0.5 border-l-2 -ml-px
                  ${level === 3 ? 'pl-5' : 'pl-3'}
                  ${active === id
                    ? 'border-maroon text-maroon'
                    : 'border-transparent text-ink-faint hover:text-ink'
                  }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
