import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../lib/content'
import { getAllProjects } from '../lib/content'
import BlogCard from '../components/cards/BlogCard'
import ProjectCard from '../components/cards/ProjectCard'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)
  const projects = getAllProjects().slice(0, 3)

  return (
    <div className="px-5 md:px-10 py-12 md:py-16 max-w-4xl">
      {/* Hero */}
      <section id="about" className="mb-24">
        <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mb-5">
          Developer, Engineer
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05] mb-6">
          <span className="italic text-maroon">About</span> Me.
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-10">
          <div className="max-w-xl">
            <p className="font-serif italic text-lg text-ink-muted leading-relaxed mb-4">
              Undergrad at <em className="text-maroon not-italic">IGDTUW</em> | Batch of 2028
            </p>
            <p className="text-sm text-ink-muted font-sans leading-relaxed">
              I would describe myself as someone who is adaptible, curious to learn, and is interested in a plethora of topics that intersect with, 
              or are a subset within the domain of computer science and IT.
              <br/>
              I have ongoing contributions in <em className="text-maroon not-italic">data.table</em>, with a personal goal of understanding low-level C before I graduate. 
              <em className="text-maroon not-italic"> I strongly believe in, and want to further open source software.</em> I also find myself exploring AI safety and alignment, system design, LLMs, LMMs, explainable AI, and its applications, during my free time (credits to substack newsletters).
              <br/> A lot of my previous work is focused on development and NLP, reflecting my long-standing interest in these areas. 
              I enjoy building pipelines and architecting creative solutions to complex problems. 
              I also enjoy clean, pretty-looking UI/UX, often designing posters, websites, and stories for my college club, <em className="text-maroon not-italic">ACM-IGDTUW</em>.
              I currently serve as the <em className="text-maroon not-italic">web development and design lead</em> for this club.
              <br />
              <br />
              Apart from tech, I enjoy reading books. I've recently been into philosophical books, currently reading <em className="text-maroon not-italic">The Stranger</em> by Albert Camus. 
              I also enjoy reading fictional and fantasy novels, hoping to read a lot more this year.
              <br/>
              <br/>
              I'm currently in my second year of undergrad, pursuing a B.Tech in <em className="text-maroon not-italic">Information Technology</em> at <em className="text-maroon not-italic">Indira Gandhi Delhi Technical University for Women</em> (IGDTUW). Hoping to someday leave a positive mark through my work.
            </p>
            {/* <Link
              href="/projects"
              className="inline-block bg-maroon text-off-white text-xs uppercase tracking-widest font-sans px-6 py-3 hover:bg-maroon-dark transition-colors"
            >
              View Archive
            </Link> */}
          </div>
          <div className="shrink-0 w-40 h-40 md:w-56 md:h-56 overflow-hidden md:-mt-14">
            <Image
              src="/me.jpg"
              alt="Tanisha"
              width={224}
              height={224}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Selected Works */}
      {projects.length > 0 && (
        <section id="works" className="mb-24 pt-16 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">
              Recent Projects
            </p>
            <Link href="/projects" className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans hover:text-maroon transition-colors">
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Work */}
      {/* <section id="work" className="mb-24 pt-16 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">
            Experience
          </p>
          <Link href="/work" className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans hover:text-maroon transition-colors">
            Complete History →
          </Link>
        </div>
        <div className="relative pl-8 border-l border-border">
          <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-maroon" />
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="font-serif font-bold text-xl text-ink">Company Name</h2>
              <p className="font-serif italic text-base text-maroon">Software Engineer</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans">2023 — Present</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mt-0.5">Remote</p>
            </div>
          </div>
          <p className="text-sm text-ink-muted font-sans leading-relaxed mb-4">
            Brief description of what you worked on, technologies used, and impact delivered.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript'].map((tag) => (
              <span key={tag} className="text-[0.6rem] uppercase tracking-widest text-ink-faint border border-border font-sans px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Recent Writing */}
      {posts.length > 0 && (
        <section id="writing" className="mb-16 pt-16 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif italic text-2xl font-semibold text-ink">
              Recent Writing
            </h2>
            <p className="text-xs text-ink-faint font-sans">
              On tech, books &amp; anything interesting.
            </p>
          </div>
          <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mb-8">
            
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-xs uppercase tracking-widest text-maroon font-sans hover:underline underline-offset-4">
              Read all essays →
            </Link>
          </div>
        </section>
      )}

      {/* Pull quote */}
      <section className="mb-24 pt-16 border-t border-border">
        <div className="border-l-2 border-maroon pl-8 py-2">
          <blockquote className="font-serif italic text-2xl text-ink leading-relaxed">
            "Never regret thy fall,
            O Icarus of the fearless flight
            <br />
            For the greatest tragedy of them all,
            is never to feel the burning light."
          </blockquote>
          <p className="text-[0.65rem] uppercase tracking-widest text-ink-faint font-sans mt-4">
            — Oscar Wilde
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="pt-16 border-t border-border">
        <h2 className="font-serif text-4xl font-bold text-ink mb-2">
          <span className="italic">Contact me</span>.
        </h2>
        <p className="text-sm text-ink-muted font-sans max-w-sm mt-4 leading-relaxed">
          Most of my social links are on the sidebar, but you can also reach me at my email,
        </p>
        <a
          href="mailto:tanisha.ojha2004x2@gmail.com"
          className="inline-block mt-0.2 font-serif italic text-md text-maroon hover:underline underline-offset-4">
          tanisha.ojha2004x2@gmail.com
        </a>
      </section>
    </div>
  )
}
