import Link from 'next/link'
import Image from 'next/image'
import Tag from '../ui/Tag'

export default function ProjectCard({ project }) {
  const { slug, title, tags = [], excerpt, image } = project

  return (
    <Link href={`/projects/${slug}`} className="block group">
      <article className="bg-surface rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col">
        {/* Text section */}
        <div className="p-6 flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.slice(0, 2).map((tag, i) => (
              <Tag key={i} filled={i === 0}>{tag}</Tag>
            ))}
          </div>
          <h2 className="font-serif font-bold text-lg text-ink leading-snug mb-2 group-hover:text-maroon transition-colors">
            {title}
          </h2>
          <p className="text-sm text-ink-muted font-sans leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Image section */}
        <div className="relative h-44 w-full bg-ink overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-ink to-ink-muted flex items-end p-4">
              <span className="font-serif italic text-off-white/30 text-2xl">{title}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
