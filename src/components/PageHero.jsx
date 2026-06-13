import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50 pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container-px relative text-center">
        <Reveal>
          {eyebrow && <span className="eyebrow justify-center">{eyebrow}</span>}
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-ink-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
