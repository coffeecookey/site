export default function Tag({ children, filled = false }) {
  if (filled) {
    return (
      <span className="inline-block bg-maroon text-off-white text-[0.6rem] uppercase tracking-widest font-sans px-2 py-0.5 rounded-sm">
        {children}
      </span>
    )
  }
  return (
    <span className="inline-block border border-ink-faint text-ink-faint text-[0.6rem] uppercase tracking-widest font-sans px-2 py-0.5 rounded-sm">
      {children}
    </span>
  )
}
