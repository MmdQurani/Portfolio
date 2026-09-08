import React from 'react'

/**
 * ProgressBar – reusable labelled progress bar used in the Skills and
 * Languages sections (gradient fill with the secondary brand color).
 */
function ProgressBar({
  label,
  value,
  note = null,
  subtitle = null,
  className = '',
  heightClass = 'h-1.5',
  valueClass = 'text-secondary',
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-start justify-between gap-2 text-sm">
        <div className="text-left">
          <span className="font-medium text-white/85">{label}</span>
          {subtitle && <p className="mt-0.5 text-xs text-white/60">{subtitle}</p>}
        </div>
        {note && <span className={`flex-none font-semibold ${valueClass}`}>{note}</span>}
      </div>
      <div className={`${heightClass} overflow-hidden rounded-full bg-white/10`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-secondary-dark transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar