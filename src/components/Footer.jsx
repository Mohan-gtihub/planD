import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Mail, Phone, MessageCircle } from 'lucide-react'
import { company, services } from '../data/site.js'

export default function Footer() {
  const socials = [
    { icon: Instagram, href: company.instagram, label: 'Instagram' },
    { icon: Facebook, href: company.facebook, label: 'Facebook' },
    { icon: Youtube, href: company.youtube, label: 'YouTube' },
    { icon: MessageCircle, href: company.whatsapp, label: 'WhatsApp' },
    { icon: Mail, href: `mailto:${company.email}`, label: 'Email' },
    { icon: Phone, href: `tel:+${company.phoneRaw}`, label: 'Phone' },
  ]

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="The Plan D logo" className="h-11 w-11 rounded-xl bg-white object-contain p-0.5" />
            <span className="font-display text-lg font-bold tracking-tighter text-white">
              The Plan <span className="text-brand-400">D</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
            A full-service digital marketing, design & development agency — helping brands grow online with measurable results.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">Company</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li><a href={`tel:+${company.phoneRaw}`} className="hover:text-white">{company.phone}</a></li>
          </ul>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-brand-400 hover:text-white">
            Start a Project
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row">
          <p>{company.copyright}</p>
          <p>A unit of {company.parent}</p>
        </div>
      </div>
    </footer>
  )
}
