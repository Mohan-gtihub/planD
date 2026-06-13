import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-ink-50 px-6 text-center">
      <div>
        <p className="font-display text-8xl font-extrabold tracking-tighter text-brand-600">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-500">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8"><Home size={18} /> Back to Home</Link>
      </div>
    </section>
  )
}
