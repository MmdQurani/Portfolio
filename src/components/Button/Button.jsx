import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable styled button that can render as a router <Link>,
 * an external <a>, or a native <button>.
 */
function Button({
  children,
  variant = 'primary',
  to = null,
  href = null,
  className = '',
  onClick = null,
  type = 'button',
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-60'

  const variants = {
    primary:
      'bg-secondary text-primary hover:bg-secondary-light hover:shadow-[0_0_35px_rgba(203,172,249,0.45)]',
    secondary:
      'border border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/70',
    ghost: 'text-white/75 hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button