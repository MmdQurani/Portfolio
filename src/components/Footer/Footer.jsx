import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'GitHub', char: '🐙' },
  { label: 'LinkedIn', char: '💼' },
  { label: 'Twitter', char: '🐦' },
]

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-surface/40">
      {/* top accent */}
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-secondary-dark font-black text-primary">
              M
            </span>
            <span>
              Mohammad<span className="text-secondary">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Crafting modern, fast and beautiful web experiences. Let's turn your ideas into
            something people love.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Let's Connect
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-secondary"
                >
                  <span>{social.char}</span>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} Mohammad. Crafted with{' '}
          <span className="text-secondary">♥</span> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer