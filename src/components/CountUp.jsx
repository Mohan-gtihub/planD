import { useEffect, useRef, useState } from 'react'

// Counts from 0 to `value` once when it scrolls into view.
export default function CountUp({ value, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            // ease-out
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
