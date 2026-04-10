import Link from 'next/link'
import Tag from '../ui/Tag'

export default function BlogCard({ post }) {
  const { slug, title, tags = [], excerpt, date, readingTime } = post

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="bg-surface rounded-2xl p-7 card-hover cursor-pointer h-full flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 2).map((tag, i) => (
            <Tag key={i} filled={i === 0}>{tag}</Tag>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-serif italic text-xl font-semibold text-ink leading-snug mb-3 group-hover:text-maroon transition-colors">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-ink-muted font-sans leading-relaxed flex-1">
          {excerpt}
        </p>

        {/* Date */}
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mt-6">
          {date}
          {readingTime && <span className="ml-3">{readingTime}</span>}
        </p>
      </article>
    </Link>
  )
}
