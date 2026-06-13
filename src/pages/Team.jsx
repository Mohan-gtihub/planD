import { team } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind The Plan D"
        subtitle="Creative minds working together to grow brands digitally."
      />

      <section className="py-20">
        <div className="container-px space-y-20">
          {team.map((group) => (
            <div key={group.department}>
              <Reveal>
                <div className="mb-10 flex items-center gap-5">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">{group.department}</h2>
                  <span className="h-px flex-1 bg-ink-200" />
                  <span className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-500">
                    {group.members.length} {group.members.length === 1 ? 'member' : 'members'}
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.members.map((m, i) => (
                  <Reveal key={m.name} delay={(i % 4) * 0.06}>
                    <article className="card group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={m.photo}
                          alt={m.name}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-base font-bold tracking-tight text-ink-900">{m.name}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{m.role}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
