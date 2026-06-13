import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { services } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={service.title} title={service.title} subtitle={service.hero} />

      <section className="py-20">
        <div className="container-px">
          <Link to="/services" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-brand-600">
            <ArrowLeft size={16} /> All services
          </Link>

          <div className="grid gap-6 lg:grid-cols-2">
            {service.sections.map((sec, i) => (
              <Reveal key={i} delay={(i % 2) * 0.07} className={i === 0 ? 'lg:col-span-2' : ''}>
                <div className="card h-full p-8">
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink-900">{sec.heading}</h2>
                  {sec.text && <p className="mt-3 leading-relaxed text-ink-500">{sec.text}</p>}
                  {sec.paragraphs?.map((p, j) => <p key={j} className="mt-3 leading-relaxed text-ink-500">{p}</p>)}
                  {sec.list && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {sec.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                            <Check size={13} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-px">
          <SectionTitle eyebrow="Why Choose Us" title={`Why choose us for ${service.title}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.07}>
                <div className="card h-full p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
                    <Icon name={w.icon} size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20">
        <div className="container-px">
          <SectionTitle center={false} eyebrow="Explore More" title="Other services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card group flex items-center gap-4 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="font-display font-semibold text-ink-900">{s.title}</span>
                <ArrowRight size={18} className="ml-auto text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-px">
          <div className="rounded-4xl bg-ink-900 px-8 py-14 text-center text-white sm:px-16">
            <h2 className="font-display text-3xl font-bold tracking-tighter">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">Let’s talk about how {service.title} can grow your business.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition-transform hover:-translate-y-0.5">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
