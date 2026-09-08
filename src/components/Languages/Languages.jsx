import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Reveal from '../Reveal/Reveal'
import ProgressBar from '../ProgressBar/ProgressBar'

/**
 * Languages – reusable language proficiency section built on ProgressBar.
 */
function Languages({ languages = [], className = '' }) {
  return (
    <section className={`relative py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitle align="left" eyebrow="Languages" title="Languages I speak" />
        <div className="grid gap-5 sm:grid-cols-3">
          {languages.map((lang, index) => (
            <Reveal key={lang.name} delay={index * 100} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-surface p-6">
                <ProgressBar
                  label={lang.name}
                  subtitle={lang.level}
                  value={lang.percent}
                  note={lang.note}
                  heightClass="h-2"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages