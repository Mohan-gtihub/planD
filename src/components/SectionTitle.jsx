import Reveal from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</span>}
      <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 leading-relaxed text-ink-500">{subtitle}</p>}
    </Reveal>
  )
}
