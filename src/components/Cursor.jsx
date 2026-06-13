import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Custom cursor: a precise dot + a soft trailing ring that grows on
// interactive elements. Disabled on touch / reduced-motion for accessibility.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [down, setDown] = useState(false)
  const [hidden, setHidden] = useState(true)

  // Raw pointer position drives the dot 1:1.
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // The ring lags behind with a spring for a smooth, premium feel.
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const interactive = 'a, button, [role="button"], input, textarea, select, label, summary'

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
      setHovering(Boolean(e.target.closest?.(interactive)))
    }
    const leave = () => setHidden(true)
    const downHandler = () => setDown(true)
    const upHandler = () => setDown(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    window.addEventListener('mousedown', downHandler)
    window.addEventListener('mouseup', upHandler)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousedown', downHandler)
      window.removeEventListener('mouseup', upHandler)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.2s' }}
    >
      {/* Trailing ring */}
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-ink-900"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          opacity: hovering ? 0.35 : 0.55,
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
      {/* Precise center dot */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-brand-600"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 6 : 7,
          height: hovering ? 6 : 7,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </div>
  )
}
