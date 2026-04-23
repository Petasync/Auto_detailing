export default function BtnPrimary({ children, className = '', href, ...rest }) {
  return (
    <a
      href={href}
      {...rest}
      className={
        'group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-3 ' +
        'text-sm font-medium tracking-wide text-onyx-950 ' +
        'transition-all duration-300 hover:bg-[var(--gold-hi)] ' +
        'hover:shadow-[0_0_40px_-8px_var(--gold)] hover:-translate-y-0.5 ' +
        'focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60 focus:ring-offset-2 focus:ring-offset-onyx-950 ' +
        className
      }
    >
      {children}
    </a>
  )
}
