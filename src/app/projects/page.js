import { getAllProjects } from '../../lib/content'
import ProjectCard from '../../components/cards/ProjectCard'

export const metadata = { title: 'Projects — Tanisha Ojha' }

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="px-10 py-16 max-w-5xl">
      {/* Header */}
      <section className="mb-16">
        <h1 className="font-serif text-5xl font-bold text-ink mb-1">
          Recent <span className="italic">Projects</span>
        </h1>
        <div className="border-l-2 border-maroon pl-6 mt-8 max-w-lg">
          <p className="font-sans text-sm text-ink-muted leading-relaxed">
            A deliberate assembly of digital experiences and engineering artifacts. This collection represents a commitment to structural clarity and aesthetic permanence.
          </p>
        </div>
      </section>

      {/* Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="font-serif italic text-2xl text-ink-faint">Projects coming soon.</p>
        </div>
      )}

      {/* Footer CTA */}
      <section className="mt-24 pt-12 border-t border-border">
        <h2 className="font-serif text-3xl font-bold text-ink">
          Have a <span className="italic">vision?</span>
        </h2>
        <p className="text-sm text-ink-muted font-sans mt-3 max-w-sm leading-relaxed">
          Open to select collaborations. Let us build something that endures.
        </p>
        <a href="mailto:hello@tanishaojha.com" className="inline-block mt-4 font-serif italic text-lg text-maroon hover:underline underline-offset-4">
          hello@tanishaojha.com
        </a>
      </section>
    </div>
  )
}
