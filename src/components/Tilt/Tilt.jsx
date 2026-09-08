import React, { useRef } from 'react'

/**
 * Tilt – wraps a card and tilts it in 3D towards the cursor on hover
 * (max ~10deg). Falls back gracefully on touch (no effect).
 */
function Tilt({ children, className = '', max = 9, scale = 1.02 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) scale(${scale})`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

export default Tilt