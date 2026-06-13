import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion'

// Fixed, full-page background. Layered for depth but all low-opacity so it stays
// clean: drifting gradient orbs + a dot grid that lights up around the cursor.
export default function Background() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.8 })
  const sy = useSpring(y, { stiffness: 120, damping: 30, mass: 0.8 })

  // Normalised pointer offset (-1..1) for a gentle parallax lean on the orbs.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const ppx = useSpring(px, { stiffness: 60, damping: 20 })
  const ppy = useSpring(py, { stiffness: 60, damping: 20 })
  const orb1X = useTransform(ppx, (v) => v * 28)
  const orb1Y = useTransform(ppy, (v) => v * 28)
  const orb2X = useTransform(ppx, (v) => v * -36)
  const orb2Y = useTransform(ppy, (v) => v * -36)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y, px, py])

  // A bright dot grid revealed only near the cursor via a radial mask.
  const mask = useMotionTemplate`radial-gradient(260px circle at ${sx}px ${sy}px, #000 0%, transparent 70%)`
  // Soft brand spotlight glow that trails the cursor.
  const glow = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, rgba(36,81,230,0.10), transparent 65%)`

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Drifting gradient orbs — soft colour, slow motion, slight parallax */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute -left-32 -top-32 h-[34rem] w-[34rem] animate-drift1 rounded-full bg-brand-200/30 blur-[110px]"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute -bottom-40 -right-24 h-[38rem] w-[38rem] animate-drift2 rounded-full bg-brand-100/40 blur-[120px]"
      />

      {/* Faint base dot grid everywhere */}
      <div className="absolute inset-0 bg-dotgrid opacity-40" />

      {/* Brighter dot grid, masked to a circle around the cursor */}
      <motion.div
        className="absolute inset-0 opacity-90"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
          backgroundImage:
            'radial-gradient(rgba(36,81,230,0.45) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Cursor glow */}
      <motion.div className="absolute inset-0" style={{ background: glow }} />

      {/* Top fade keeps the header/hero area clean */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/70 to-transparent" />
    </div>
  )
}
