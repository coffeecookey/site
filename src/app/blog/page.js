import { getAllPosts } from '../../lib/content'
import BlogCard from '../../components/cards/BlogCard'

export const metadata = { title: 'Blog — Tanisha Ojha' }

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="px-5 md:px-10 py-12 md:py-16 max-w-5xl">
      {/* Header */}
      <section className="mb-6">
        <p className="text-[0.65rem] uppercase tracking-widest text-maroon font-sans mb-4">
          Archive &amp; Essays
        </p>
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-lg">
            <h1 className="font-serif italic text-5xl font-bold text-ink leading-[1.1]">
              My little corner{' '}
              <span className="text-ink-muted">of the Internet</span>
            </h1>
            <p className="text-sm text-ink-muted font-sans leading-relaxed mt-6 max-w-sm">
              A collection of thoughts on engineering, design philosophy, books, or pretty much anything that intrigues me.
            </p>
          </div>
          {posts.length > 0 && (
            <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mt-2 whitespace-nowrap">
              {posts.length} Essays
            </p>
          )}
        </div>
      </section>

      {/* Divider + count */}
      <div className="flex items-center justify-between py-6 border-t border-border mb-8 mt-10">
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">
          Recent Thoughts
        </p>
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">
          Viewing 1–{Math.min(posts.length, 12)} of {posts.length}
        </p>
      </div>

      {/* Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="font-serif italic text-2xl text-ink-faint">Essays coming soon.</p>
        </div>
      )}
    </div>
  )
}
