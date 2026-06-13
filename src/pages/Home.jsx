import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { services, stats, process, company, capabilities, testimonials, techMarquee } from '../data/site.js'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import Lottie from '../components/Lottie.jsx'
import TechStack from '../components/TechStack.jsx'
import Faq from '../components/Faq.jsx'
import Icon from '../components/Icon.jsx'
import { lottie, images } from '../data/assets.js'

const ease = [0.22, 1, 0.36, 1]

// A balanced six for the homepage — three marketing, three tech.
const featuredSlugs = ['seo', 'meta-ads', 'social-media-marketing', 'custom-software', 'ai-automation', 'web-development']
const featured = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
        {/* clean layered background */}
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.35] [mask-image:radial-gradient(110%_80%_at_70%_20%,#000,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-32 -top-24 h-[42rem] w-[42rem] rounded-full bg-brand-100/50 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-[120px]" />

        <div className="container-px relative">
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
                We grow brands and build the tech behind them.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease }}
                className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500"
              >
                The Plan D is a full-service agency with two arms — marketing &amp; brand, and
                technology &amp; software. From SEO and social to custom software and AI automation,
                one team takes you from idea to growth.
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
              className="relative lg:col-span-5"
            >
              {/* soft halo so the Lottie fills the space, not floats in white */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-100/70 to-white blur-2xl" />
              {/* Clean, plain Lottie — large and centered */}
              <Lottie src={lottie.hero} className="relative mx-auto w-full max-w-2xl lg:scale-[1.35] lg:-mr-6" />
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

      {/* TECH LOGO MARQUEE */}
      <section className="overflow-hidden border-y border-ink-100 bg-ink-50/60 py-10">
        <p className="container-px text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Powering brands with a modern marketing &amp; software stack
        </p>

        <div className="relative mt-7 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-3">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <TechChip key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-ink-100 py-24">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              center={false}
              eyebrow="What we do"
              title="Marketing and technology, together"
              subtitle="From SEO and social to custom software and AI automation — one team covers both sides of your growth."
            />
            <Link to="/services" className="link-underline shrink-0 text-sm">All services →</Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-ink-100 bg-ink-900 py-24 text-white">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow !text-brand-300 before:bg-brand-400">What sets us apart</span>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tighter text-white sm:text-4xl">
              The rare agency that markets <span className="text-brand-300">and</span> builds
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <div className="h-full bg-ink-900 p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{c.text}</p>
                </div>
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
              Marketing and engineering, working together
            </h2>
            <p className="mt-5 leading-relaxed text-ink-500">
              Most agencies do one or the other. We do both — the marketing that gets you seen and
              the software and AI that runs your business. One team, from strategy to shipping code.
            </p>
            <ul className="mt-8 divide-y divide-ink-200/70 border-t border-ink-200/70">
              {[
                'Marketing & software under one roof',
                'Custom builds, not off-the-shelf templates',
                'AI automation that saves real hours',
                'Focused on measurable business results',
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

      {/* TECH STACK */}
      <TechStack />

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

      {/* TESTIMONIALS */}
      <section className="border-t border-ink-100 bg-ink-50 py-24">
        <div className="container-px">
          <SectionTitle
            center={false}
            eyebrow="Client words"
            title="Trusted by growing brands"
            subtitle="A few words from the teams we’ve helped grow."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.07}>
                <figure className="card flex h-full flex-col p-7">
                  <div className="flex gap-0.5 text-brand-500">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={15} fill="currentColor" />)}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-ink-100 pt-4">
                    <p className="font-display text-sm font-bold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

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

// Branded pill used in the hero tech marquee.
function TechChip({ name, slug }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 rounded-full border border-ink-100 bg-white px-4 py-2.5 shadow-soft">
      <img src={`https://cdn.simpleicons.org/${slug}`} alt="" width={20} height={20} loading="lazy" className="h-5 w-5 object-contain" />
      <span className="text-sm font-semibold text-ink-700">{name}</span>
    </span>
  )
}
