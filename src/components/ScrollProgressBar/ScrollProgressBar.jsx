import React, { useEffect, useState } from 'react'

/**
 * ScrollProgressBar – thin gradient bar fixed to the top of the viewport
 * that fills as the user scrolls down the page.
 */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = h > 0 ? Math.min(window.scrollY / h, 1) : 0
      setProgress(scrolled)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="h-full rounded-full bg-gradient-to-r from-secondary via-secondary-light to-secondary-dark transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

export default ScrollProgressBar