import React, { useEffect } from 'react'

/**
 * CursorGlow – a soft, screen-blended radial glow that follows the mouse.
 * Desktop-only, purely decorative (pointer-events: none).
 */
function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    if (!glow || window.matchMedia) return

    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY
    let active = false
    let raf = null

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!active) {
        active = true
        glow.classList.add('is-active')
      }
    }

    const loop = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      glow.style.transform = `translate(${x - 260}px, ${y - 260}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow