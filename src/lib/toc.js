export function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function extractHeadings(content) {
  const regex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match
  while ((match = regex.exec(content)) !== null) {
    const text = match[2].trim()
    headings.push({ level: match[1].length, text, id: slugify(text) })
  }
  return headings
}
