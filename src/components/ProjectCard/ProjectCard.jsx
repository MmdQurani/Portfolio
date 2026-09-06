import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_25px_70px_-20px_rgba(203,172,249,0.35)]">
      {/* Top glow on hover */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-secondary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thumbnail */}
      <div className="relative mb-5 flex h-44 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-secondary/25 via-surface-light to-surface">
        <span className="text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
          {project.icon || '🚀'}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-secondary/40 bg-primary/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary backdrop-blur">
          {project.featured ? 'Featured' : 'Project'}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-secondary">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-surface-light px-3 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-4 text-sm">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-1 font-semibold text-secondary transition-colors hover:text-secondary-light"
        >
          View Details
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
        {project.demo && project.demo !== '#' && (
          <a href={project.demo} className="text-white/60 transition-colors hover:text-secondary">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard