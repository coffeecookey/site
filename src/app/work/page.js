export const metadata = { title: 'Work — Tanisha Ojha' }

const experience = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    period: '2023 — Present',
    location: 'Remote',
    description: 'Brief description of what you worked on, technologies used, and impact delivered.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    company: 'Another Company',
    role: 'Frontend Developer',
    period: '2022 — 2023',
    location: 'New York',
    description: 'Another role description highlighting your contributions and the problems you solved.',
    tags: ['Next.js', 'Python', 'PostgreSQL'],
  },
]

export default function WorkPage() {
  return (
    <div className="px-10 py-16 max-w-3xl">
      {/* Header */}
      <section className="mb-16">
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mb-4">
          Experience
        </p>
        <h1 className="font-serif text-5xl font-bold text-ink leading-tight">
          Where I&apos;ve <span className="italic">Worked.</span>
        </h1>
        <p className="text-sm text-ink-muted font-sans mt-6 max-w-md leading-relaxed">
          A record of the places, teams, and problems that have shaped how I think about engineering and craft.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-0">
        {experience.map((item, i) => (
          <div key={i} className="relative pl-8 pb-14 border-l border-border last:border-transparent">
            {/* Dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-maroon" />

            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="font-serif font-bold text-xl text-ink">{item.company}</h2>
                <p className="font-serif italic text-base text-maroon">{item.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">{item.period}</p>
                <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mt-0.5">{item.location}</p>
              </div>
            </div>

            <p className="text-sm text-ink-muted font-sans leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[0.6rem] uppercase tracking-widest text-ink-faint border border-border font-sans px-2 py-0.5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Resume */}
      <section className="mt-8 pt-10 border-t border-border">
        <p className="text-sm text-ink-muted font-sans mb-4">Want the full picture?</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-maroon text-off-white text-xs uppercase tracking-widest font-sans px-6 py-3 hover:bg-maroon-dark transition-colors"
        >
          Download Résumé
        </a>
      </section>
    </div>
  )
}
