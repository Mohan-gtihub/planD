import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../data/site.js'
import SectionTitle from './SectionTitle.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="border-t border-ink-100 py-24">
      <div className="container-px grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle
            center={false}
            eyebrow="FAQ"
            title="Questions, answered"
            subtitle="Everything you need to know before getting started."
          />
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-ink-100 border-t border-ink-100">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink-900">{item.q}</span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-brand-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-500">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
