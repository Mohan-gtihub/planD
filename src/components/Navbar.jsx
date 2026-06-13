import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { company } from '../data/site.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-100 bg-white/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="The Plan D logo" className="h-11 w-11 rounded-xl object-contain" />
          <span className="font-display text-lg font-bold tracking-tighter text-ink-900">
            The Plan <span className="text-brand-600">D</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'font-semibold text-brand-600' : 'font-medium text-ink-500 hover:text-ink-900'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary hidden md:inline-flex !py-2.5 !px-5 text-sm">
          Start a Project <ArrowUpRight size={16} />
        </Link>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 text-ink-900 md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <ul className="container-px flex flex-col py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 text-base ${isActive ? 'font-semibold text-brand-600' : 'font-medium text-ink-700'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="py-3">
              <Link to="/contact" className="btn-primary w-full">Start a Project</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
