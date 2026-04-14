import { getAllProjects, getProjectBySlug } from '../../../lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Tag from '../../../components/ui/Tag'
import Image from 'next/image'

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return { title: `${project.title} — Tanisha Ojha` }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const { title, tags = [], excerpt, image, year, role, content } = project

  return (
    <div className="px-5 md:px-10 py-12 md:py-16 max-w-3xl">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <Tag key={i} filled={i === 0}>{tag}</Tag>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex gap-8 mb-10 border-b border-border pb-8">
        {year && (
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest text-ink-faint font-sans mb-1">Year</p>
            <p className="text-sm font-sans text-ink">{year}</p>
          </div>
        )}
        {role && (
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest text-ink-faint font-sans mb-1">Role</p>
            <p className="text-sm font-sans text-ink">{role}</p>
          </div>
        )}
      </div>

      {/* Hero image */}
      {image && (
        <div className="relative w-full h-72 mb-10 rounded-xl overflow-hidden bg-surface">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}

      {/* MDX content */}
      <div className="mdx-content">
        <MDXRemote source={content} />
      </div>
    </div>
  )
}
