import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Reveal from '../Reveal/Reveal'
import ProgressBar from '../ProgressBar/ProgressBar'
import skills from '../../data/skills'

/**
 * SkillsSection – the reusable skills grid (category cards with progress bars).
 * Used on both the Home and About pages.
 */
function SkillsSection({
  eyebrow = 'My Skills',
  title = 'Tools & technologies I work with',
  description = null,
  align = 'center',
  glow = false,
  className = '',
}) {
  return (
    <section id="skills" className={`relative ${className}`}>
      {glow && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]" />
        </div>
      )}

      <div className={`mx-auto px-6 lg:px-8 ${description ? 'max-w-7xl' : 'max-w-6xl'}`}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} align={align} />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.category} delay={index * 120} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_25px_70px_-25px_rgba(203,172,249,0.4)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-2xl">
                    {category.icon}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-5">
                  {category.items.map((skill) => (
                    <ProgressBar
                      key={skill.name}
                      label={skill.name}
                      value={skill.level}
                      note={`${skill.level}%`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection