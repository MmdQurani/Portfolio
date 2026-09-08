import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Reveal from '../Reveal/Reveal'

/**
 * SoftSkills – reusable pill-chip section for soft / personal skills.
 */
function SoftSkills({ skills = [], title = 'How I work', className = '' }) {
  return (
    <section className={`relative py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitle align="left" eyebrow="Soft Skills" title={title} />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 60}>
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/20 hover:border-secondary/60">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills