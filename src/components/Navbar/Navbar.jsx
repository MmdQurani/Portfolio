import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-secondary text-primary shadow-[0_0_20px_rgba(203,172,249,0.5)]'
        : 'text-white/70 hover:bg-white/5 hover:text-secondary'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <nav
        className={`relative mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled || open
            ? 'border-white/15 bg-white/[0.06] shadow-[0_12px_40px_-10px_rgba(203,172,249,0.25)] backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.03] backdrop-blur-xl'
        }`}
      >
        {/* top highlight line + corner glows */}
        <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />
        <span className="pointer-events-none absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <span className="pointer-events-none absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />

        {/* Brand */}
        <Link to="/" className="relative flex items-center gap-2.5 font-display text-xl font-bold text-white">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-secondary-dark font-black text-primary">
            <span className="animate-spin-slow pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent_0_330deg,#fff_360deg)] opacity-70" />
            <span className="relative">M</span>
          </span>
          <span>
            Mohammad<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1.5 p-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="relative hidden md:block">
          <Button to="/contact">Hire Me</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-secondary/40 hover:text-secondary md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile glass menu */}
      {open && (
        <div className="relative mt-2 mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-4 backdrop-blur-2xl md:hidden">
          <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-secondary text-primary'
                        : 'text-white/70 hover:bg-white/5 hover:text-secondary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar