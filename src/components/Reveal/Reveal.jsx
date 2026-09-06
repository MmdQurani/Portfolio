import React, { useEffect, useRef, useState } from 'react'

/**
 * Reveal – wraps content and animates it into view when scrolled into the
 * viewport (IntersectionObserver). Supports directional + zoom reveals with
 * staggered delays for a smooth, trendy feel.
 */
function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenState = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    zoom: 'scale-90',
    fade: '',
  }

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all ease-out ${className} ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${hiddenState[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal