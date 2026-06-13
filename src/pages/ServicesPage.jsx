import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { serviceGroups } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Marketing and technology, under one roof"
        subtitle="Two arms, one team — we grow your brand and build the software and AI that powers it."
      />
      <section className="py-20">
        {serviceGroups.map((group, gi) => (
          <div key={group.key} className={gi > 0 ? 'container-px mt-20' : 'container-px'}>
            <SectionTitle center={false} eyebrow={group.label} title={group.label} subtitle={group.tagline} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                  <ServiceCard service={s} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="container-px mt-16">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-4xl border border-ink-100 bg-ink-50 px-8 py-10 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900">Not sure what you need?</h3>
                <p className="mt-2 text-ink-500">Tell us about your goals and we’ll recommend the right plan.</p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">Talk to us <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
