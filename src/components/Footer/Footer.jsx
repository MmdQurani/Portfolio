import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  {
    label: 'GitHub',
    handle: '@MmdQurani',
    url: 'https://github.com/MmdQurani',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'in/mohammad-qurani-o7m',
    url: 'https://www.linkedin.com/in/mohammad-qurani-o7m',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    handle: '@mmd_qm_78',
    url: 'https://t.me/mmd_qm_78',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0zm5.87 8.16-1.99 9.38c-.15.68-.55.85-1.12.53l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.62.3l.22-3.14 5.72-5.17c.25-.22-.05-.34-.38-.12l-7.06 4.45-3.04-.95c-.66-.2-.67-.66.14-.98l11.9-4.59c.55-.2 1.04.13.86.97z" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#05081a]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-orb absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary/15 blur-[110px]" />
        <div className="animate-orb absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary-dark/15 blur-[130px]" style={{ animationDelay: '3s' }} />
      </div>
      {/* top gradient accent */}
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* ===================== MINI CTA ===================== */}
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-secondary/25 bg-gradient-to-r from-secondary/15 via-surface to-secondary/10 p-8 text-center shadow-2xl sm:flex-row sm:justify-between sm:p-10 sm:text-left">
          <span className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Have a project in mind?</h3>
            <p className="mt-1.5 max-w-md text-sm text-white/70">
              Let's build something great together — I'm always open to new ideas.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex flex-none items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-secondary-light hover:shadow-[0_0_30px_rgba(203,172,249,0.5)]"
          >
            Let's Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* ===================== MAIN GRID ===================== */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-secondary-dark font-black text-primary">
              <span className="animate-spin-slow pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent_0_330deg,#fff_360deg)] opacity-70" />
              <span className="relative">M</span>
            </span>
            <span>
              Mohammad<span className="text-secondary">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Frontend developer crafting modern, fast and beautiful web experiences.
            From fintech platforms to e-commerce — code that people love to use.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="relative inline-block pb-1 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
            <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-secondary to-transparent" />
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:text-secondary">
                  <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">→</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="relative inline-block pb-1 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Let's Connect
            <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-secondary to-transparent" />
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-secondary"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.06] text-white/70 ring-1 ring-white/15 transition-all duration-300 group-hover:bg-secondary/15 group-hover:text-secondary group-hover:ring-secondary/40">
                    {social.icon}
                  </span>
                  <span>
                    {social.label}
                    <span className="block text-xs text-white/40">{social.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===================== BOTTOM BAR ===================== */}
      <div className="mx-auto mt-2 max-w-7xl px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Mohammad. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 text-xs text-white/60">
            Crafted with <span className="text-secondary">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer