import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Reveal from '../Reveal/Reveal'

/**
 * EducationSection – reusable education/experience timeline with glowing nodes.
 */
function EducationSection({ education = [], className = '' }) {
  return (
    <section className={`relative pb-24 pt-14 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionTitle align="left" eyebrow="Education" title="My academic background" />
        <div className="relative space-y-8">
          <span className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent" />
          {education.map((edu, index) => (
            <Reveal key={edu.title} delay={index * 120}>
              <div className="relative ml-12">
                <div className="absolute -left-[3.1rem] top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-secondary bg-primary shadow-[0_0_0_4px_rgba(203,172,249,0.15)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-[0_20px_50px_-25px_rgba(203,172,249,0.4)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">{edu.title}</h3>
                    <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {edu.date}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-secondary">{edu.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{edu.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection