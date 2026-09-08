import React from 'react'

/**
 * Marquee – an infinite horizontal scrolling ticker of text items
 * (trendy "tech stack" strip). Items are duplicated to loop seamlessly.
 */
function Marquee({ items = [], className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track items-center">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex items-center gap-3 text-sm font-medium text-white/60"
          >
            <span className="text-secondary">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee