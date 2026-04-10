import { getAllPosts, getPostBySlug } from '../../../lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Tag from '../../../components/ui/Tag'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    title: `${post.title} — Tanisha Ojha`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  const { title, tags = [], date, readingTime, content } = post

  return (
    <div className="px-10 py-16 max-w-2xl">
      {/* Back */}
      <Link
        href="/blog"
        className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans hover:text-maroon transition-colors mb-10 inline-block"
      >
        ← Archive
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag, i) => (
          <Tag key={i} filled={i === 0}>{tag}</Tag>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-serif italic text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 pb-8 mb-10 border-b border-border">
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">{date}</p>
        {readingTime && (
          <>
            <span className="text-border">·</span>
            <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">{readingTime}</p>
          </>
        )}
      </div>

      {/* Content */}
      <div className="mdx-content">
        <MDXRemote source={content} />
      </div>
    </div>
  )
}
