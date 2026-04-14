import { getAllPosts, getPostBySlug } from '../../../lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Tag from '../../../components/ui/Tag'
import Link from 'next/link'
import TableOfContents from '../../../components/ui/TableOfContents'
import { extractHeadings, slugify } from '../../../lib/toc'

const mdxComponents = {
  h2: ({ children }) => <h2 id={slugify(String(children))} className="font-serif text-2xl font-bold text-ink mt-10 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 id={slugify(String(children))} className="font-serif text-xl font-semibold text-ink-muted mt-8 mb-3">{children}</h3>,
  p: ({ children }) => {
    const child = Array.isArray(children) ? children[0] : children
    if (child?.type === 'img') {
      const { src, alt } = child.props
      return (
        <figure className="my-8">
          <img src={src} alt={alt} className="w-full" />
          {alt && <figcaption className="text-center text-xs text-ink-faint mt-2">{alt}</figcaption>}
        </figure>
      )
    }
    return <p>{children}</p>
  },
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return {
    title: `${post.title} — Tanisha Ojha`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const { title, tags = [], date, readingTime, content } = post
  const headings = extractHeadings(content)

  return (
    <div className="px-5 md:px-10 py-12 md:py-16 max-w-5xl flex gap-16">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        <Link
          href="/blog"
          className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans hover:text-maroon transition-colors mb-10 inline-block"
        >
          ← Archive
        </Link>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <Tag key={i} filled={i === 0}>{tag}</Tag>
          ))}
        </div>

        <h1 className="font-serif italic text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
          {title}
        </h1>

        <div className="flex items-center gap-4 pb-8 mb-10 border-b border-border">
          <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">{date}</p>
          {readingTime && (
            <>
              <span className="text-border">·</span>
              <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">{readingTime}</p>
            </>
          )}
        </div>

        <div className="mdx-content">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>

      {/* TOC */}
      <TableOfContents headings={headings} />
    </div>
  )
}
