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
    `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-secondary after:transition-all after:duration-300 ${
      isActive
        ? 'text-secondary after:w-full'
        : 'text-white/70 hover:text-white after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-primary/85 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(203,172,249,0.15)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-secondary-dark font-black text-primary">
            M
          </span>
          <span>
            Mohammad<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact">Hire Me</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
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

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-primary/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-secondary/10 text-secondary'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4">
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