import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Reveal from '../../components/Reveal/Reveal'

const socials = [
  {
    name: 'GitHub',
    handle: '@MmdQurani',
    url: 'https://github.com/MmdQurani',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'in/mohammad-qurani-o7m',
    url: 'https://www.linkedin.com/in/mohammad-qurani-o7m',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    handle: '@mmd_qm_78',
    url: 'https://t.me/mmd_qm_78',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0zm5.87 8.16-1.99 9.38c-.15.68-.55.85-1.12.53l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.62.3l.22-3.14 5.72-5.17c.25-.22-.05-.34-.38-.12l-7.06 4.45-3.04-.95c-.66-.2-.67-.66.14-.98l11.9-4.59c.55-.2 1.04.13.86.97z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'mmdqurani@gmail.com',
    url: 'mailto:mmdqurani@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
]

function Contact() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* ===================== CONTACT HEADER ===================== */}
      <section className="relative overflow-hidden pb-12 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-pulse-glow absolute -top-32 left-1/2 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[150px]" />
          <div className="animate-orb absolute right-16 top-32 h-40 w-40 rounded-full bg-secondary-dark/20 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Get In Touch"
              title="Let's work together"
              description="Have a project in mind or just want to say hi? I'd love to hear from you. Reach out through any of the channels below."
            />
          </Reveal>
        </div>
      </section>

      {/* ===================== SOCIAL CARDS ===================== */}
      <section className="relative pb-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((social, index) => (
              <Reveal key={social.name} delay={index * 100} className="h-full">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_25px_60px_-20px_rgba(203,172,249,0.45)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary">
                    {social.icon}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">{social.name}</p>
                    <p className="mt-1 text-xs text-white/60">{social.handle}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT FORM ===================== */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/60 p-8 backdrop-blur sm:p-10">
              <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-secondary/15 blur-[100px]" />

              <h3 className="relative font-display text-2xl font-bold text-white">Send me a message</h3>
              <p className="relative mt-2 text-sm text-white/70">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <form
                className="relative mt-8 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary/60 focus:bg-white/[0.06]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary/60 focus:bg-white/[0.06]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/80">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary/60 focus:bg-white/[0.06]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary/60 focus:bg-white/[0.06]"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-secondary-light hover:shadow-[0_0_35px_rgba(203,172,249,0.45)] focus:outline-none focus:ring-2 focus:ring-secondary/50"
                >
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact