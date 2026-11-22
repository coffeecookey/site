export function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Headings repeat across sections ("Their work" sits under every paper), so a
// plain slug collides and every duplicate anchor jumps back to the first one.
// A slugger walks the document once and suffixes repeats.
export function createSlugger() {
  const seen = new Map()
  return (text) => {
    const base = slugify(text) || 'section'
    const n = (seen.get(base) ?? 0) + 1
    seen.set(base, n)
    return n === 1 ? base : `${base}-${n}`
  }
}

function nodeText(node) {
  if (node.type === 'text') return node.value
  if (node.children) return node.children.map(nodeText).join('')
  return ''
}

// Stamps ids onto every rendered heading. Same slugger, same document order as
// extractHeadings below, so the ids on the page match the ones in the index.
export function rehypeHeadingIds() {
  return (tree) => {
    const slug = createSlugger()
    const walk = (node) => {
      if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
        node.properties = { ...node.properties, id: slug(nodeText(node)) }
        return
      }
      node.children?.forEach(walk)
    }
    walk(tree)
  }
}

const TOC_LEVELS = [1, 2, 3, 4]

export function extractHeadings(content, levels = TOC_LEVELS) {
  const slug = createSlugger()
  const headings = []
  let inFence = false

  for (const line of content.split('\n')) {
    if (/^\s{0,3}(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const match = /^(#{1,6})\s+(.+)$/.exec(line)
    if (!match) continue

    const text = match[2].trim().replace(/\s+#+$/, '')
    // Slug every heading, not just the listed ones, to keep the counter in
    // step with rehypeHeadingIds.
    const id = slug(text)
    const level = match[1].length
    if (levels.includes(level)) headings.push({ level, text, id })
  }

  return headings
}
