'use client'

import { useEffect, useRef, useState } from 'react'

const INDENT = { 1: 'pl-3', 2: 'pl-3', 3: 'pl-6', 4: 'pl-9' }

export default function TableOfContents({ headings }) {
  const [active, setActive] = useState(headings[0]?.id)
  const visible = useRef(new Set())

  useEffect(() => {
    visible.current = new Set()

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.add(entry.target.id)
          else visible.current.delete(entry.target.id)
        }
        // Several headings can be on screen at once; highlight the first of
        // them in document order rather than whichever fired last.
        const first = headings.find((h) => visible.current.has(h.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-16 max-h-[calc(100vh-6rem)] overflow-y-auto">
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
                  ${INDENT[level] ?? 'pl-3'}
                  ${level <= 2 ? 'font-medium' : ''}
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
