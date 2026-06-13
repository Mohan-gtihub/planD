import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { company, emailjs as cfg } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(cfg.serviceId, cfg.templateId, formRef.current, { publicKey: cfg.publicKey })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:+${company.phoneRaw}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: company.whatsapp },
    { icon: Instagram, label: 'Instagram', value: '@the_plan_d', href: company.instagram },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s build your brand together"
        subtitle="Tell us about your project and our team will get back to you shortly."
      />

      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">Get in touch</h2>
            <p className="mt-3 leading-relaxed text-ink-500">
              Have a project in mind or just want to say hello? Reach us through any of the channels below.
            </p>
            <ul className="mt-8 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-ink-400">{label}</span>
                      <span className="block text-sm font-semibold text-ink-900">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="card flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-500">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-400">Agency</span>
                  <span className="block text-sm font-semibold text-ink-900">The Plan D · A unit of {company.parent}</span>
                </span>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form ref={formRef} onSubmit={onSubmit} className="card space-y-5 p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" name="user_name" placeholder="John Doe" />
                <Field label="Your Email" name="user_email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What can we help with?" required={false} />
              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700">Your Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-ink-900 placeholder-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : (<>Send Message <Send size={18} /></>)}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 size={18} /> Thank you! Our team will contact you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <AlertCircle size={18} /> Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder, required = true }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-ink-900 placeholder-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}
