import React, { useEffect, useRef, useState } from 'react'

/**
 * AnimatedCounter – counts from 0 up to `end` when scrolled into view.
 * Renders a plain number; pass a `suffix` (e.g. "+", "%") to append.
 */
function AnimatedCounter({ end, suffix = '', duration = 1400, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(eased * end))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

export default AnimatedCounter