import React from 'react'

function SectionTitle({ eyebrow = null, title, description = null, align = 'center' }) {
  const isCenter = align === 'center'

  return (
    <div
      className={`flex flex-col gap-4 mb-14 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl leading-relaxed text-muted">{description}</p>
      )}
      <span className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-secondary-dark" />
    </div>
  )
}

export default SectionTitle