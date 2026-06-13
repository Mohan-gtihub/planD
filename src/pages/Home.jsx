import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services, stats, process, company } from '../data/site.js'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import Lottie from '../components/Lottie.jsx'
import { lottie, images } from '../data/assets.js'

const ease = [0.22, 1, 0.36, 1]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 pb-24 sm:pt-44">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
                className="eyebrow"
              >
                Digital marketing &amp; design studio
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }}
                className="mt-6 max-w-3xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-tighter text-ink-900 sm:text-6xl"
              >
                We build brands that grow online.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease }}
                className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500"
              >
                The Plan D is a full-service agency for marketing, design and development.
                We turn strategy, creativity and data into measurable growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18, ease }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link to="/contact" className="btn-primary">Start a project <ArrowRight size={16} /></Link>
                <Link to="/services" className="btn-secondary">Explore services</Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease }}
              className="lg:col-span-5"
            >
              <div className="mx-auto flex max-w-md items-center justify-center rounded-3xl border border-ink-100 bg-ink-50 p-6">
                <Lottie src={lottie.hero} className="aspect-square w-full" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-7">
                <div className="font-display text-3xl font-bold tracking-tighter text-ink-900">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1.5 text-sm text-ink-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-ink-100 py-24">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              center={false}
              eyebrow="What we do"
              title="Everything you need to grow"
              subtitle="From search rankings to social campaigns, content and events — one team, one plan."
            />
            <Link to="/services" className="link-underline shrink-0 text-sm">All services →</Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / ABOUT */}
      <section className="border-t border-ink-100 bg-ink-50 py-24">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why The Plan D</span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ink-900 sm:text-4xl">
              Creativity and data, working together
            </h2>
            <p className="mt-5 leading-relaxed text-ink-500">
              We combine design, technology, analytics and marketing to deliver real business
              growth — from SEO and content to social media and conversion.
            </p>
            <ul className="mt-8 divide-y divide-ink-200/70 border-t border-ink-200/70">
              {[
                'A dedicated, multi-disciplinary team',
                'Strategies tailored to your business',
                'Focused on real, measurable ROI',
                'Transparent, regular reporting',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 py-3.5 text-sm text-ink-700">
                  <ArrowRight size={15} className="shrink-0 text-brand-500" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/team" className="btn-primary mt-9">Meet the team <ArrowRight size={16} /></Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-ink-100">
              <img
                src={images.heroWorkspace}
                alt="The Plan D team collaborating"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-5 py-4 backdrop-blur">
                <p className="font-display text-2xl font-bold tracking-tighter text-ink-900">11</p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-500">
                  specialists across marketing,<br />design, SEO &amp; events
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-ink-100 py-24">
        <div className="container-px">
          <SectionTitle
            center={false}
            eyebrow="How we work"
            title="A clear, proven process"
            subtitle="Every engagement follows four simple steps designed to deliver results, not guesswork."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="bg-white p-8">
                <span className="font-display text-sm font-semibold text-brand-500">{p.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-100 py-24">
        <div className="container-px">
          <Reveal>
            <div className="rounded-3xl bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-20">
              <span className="eyebrow justify-center text-ink-500 before:bg-brand-400">Let’s talk</span>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to grow your brand?
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-400">
                Tell us your goals and we’ll put together a plan to get you there.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-100">
                  Get started <ArrowRight size={16} />
                </Link>
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Chat on WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
