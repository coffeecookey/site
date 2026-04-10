import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

function getFiles(folder) {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
}

function parseFrontmatter(folder, filename) {
  const slug = filename.replace('.mdx', '')
  const filePath = path.join(contentDir, folder, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, content, ...data }
}

export function getAllPosts() {
  return getFiles('blog')
    .map((f) => parseFrontmatter('blog', f))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return parseFrontmatter('blog', `${slug}.mdx`)
}

export function getAllProjects() {
  return getFiles('projects')
    .map((f) => parseFrontmatter('projects', f))
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

export function getProjectBySlug(slug) {
  return parseFrontmatter('projects', `${slug}.mdx`)
}
