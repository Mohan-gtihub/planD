import { techStack } from '../data/site.js'
import SectionTitle from './SectionTitle.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import TechLogo from './TechLogo.jsx'

// Capabilities / tech-stack showcase — grouped cards with tag chips.
export default function TechStack() {
  return (
    <section className="border-t border-ink-100 bg-ink-50 py-24">
      <div className="container-px">
        <SectionTitle
          center={false}
          eyebrow="Our tech stack"
          title="The tools we build with"
          subtitle="From e-commerce platforms to modern frameworks, databases and AI — we work across the full stack so we can build whatever your product needs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((cat, i) => (
            <Reveal key={cat.group} delay={(i % 4) * 0.06}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white">
                    <Icon name={cat.icon} size={18} />
                  </span>
                  <h3 className="font-display text-base font-bold tracking-tight text-ink-900">{cat.group}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <TechLogo key={item.name} name={item.name} slug={item.slug} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
