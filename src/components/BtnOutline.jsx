export default function BtnOutline({ children, className = '', href, ...rest }) {
  return (
    <a
      href={href}
      {...rest}
      className={
        'group inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/70 ' +
        'bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-[var(--gold)] ' +
        'transition-all duration-300 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] ' +
        'hover:text-[var(--gold-hi)] ' +
        className
      }
    >
      {children}
    </a>
  )
}
