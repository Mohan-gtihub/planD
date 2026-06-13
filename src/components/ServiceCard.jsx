import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Icon from './Icon.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card group relative flex flex-col p-8 transition-colors duration-200 hover:border-ink-200"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-50 text-ink-700 transition-colors duration-200 group-hover:bg-ink-900 group-hover:text-white">
          <Icon name={service.icon} size={20} />
        </div>
        {index != null && (
          <span className="font-display text-sm font-semibold text-ink-200">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="mt-7 font-display text-lg font-bold tracking-tight text-ink-900">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{service.short}</p>
      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
        Learn more
        <ArrowUpRight size={15} className="text-brand-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
