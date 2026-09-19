import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop – resets the scroll position to the very top of the page every
 * time the route (pathname) changes, so each page always starts from the top
 * instead of keeping the previous page's scroll offset.
 *
 * Notes:
 * - `useLayoutEffect` runs before the browser paints, so the old scroll offset
 *   is never visible for a frame (no jump/flicker on navigation).
 * - The global `scroll-behavior: smooth` (index.css) is temporarily disabled so
 *   the reset is instant — the user shouldn't watch the page animate upwards.
 * - A `#hash` target is still honoured when one exists.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior

    // Bypass the global smooth scrolling so we can snap position instantly.
    root.style.scrollBehavior = 'auto'

    let target = null
    if (hash) {
      try {
        target = document.querySelector(hash)
      } catch {
        // Invalid selector (e.g. a bare "#") — fall back to the top.
        target = null
      }
    }

    if (target) {
      target.scrollIntoView({ block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }

    root.style.scrollBehavior = previousBehavior
  }, [pathname, hash])

  return null
}

export default ScrollToTop