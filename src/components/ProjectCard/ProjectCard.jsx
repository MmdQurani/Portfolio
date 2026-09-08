import React from 'react'
import Tilt from '../Tilt/Tilt'

// Lazy-load all project photos from the Project_Photos folder.
// The card uses project.image (file name) to pick the matching photo.
const projectImages = import.meta.glob(
  '/src/assets/Project_Photos/*',
  { eager: true, import: 'default' },
)

function ProjectCard({ project }) {
  const photo = project.image ? projectImages[`/src/assets/Project_Photos/${project.image}`] : null

  return (
    <Tilt max={7} scale={1.01} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_25px_70px_-20px_rgba(203,172,249,0.35)]">
      {/* Top glow on hover */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-secondary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thumbnail */}
      <div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-secondary/25 via-surface-light to-surface">
        {photo ? (
          <img
            src={photo}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
            {project.icon || '🚀'}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full border border-secondary/40 bg-primary/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary backdrop-blur">
          {project.featured ? 'Featured' : 'Project'}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-secondary">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80 line-clamp-4">{project.description}</p>

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
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-sm">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-secondary">
            Live Demo
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-secondary">
            GitHub
          </a>
        )}
        {!project.demo && !project.repo && (
          <span className="text-white/40">No link available</span>
        )}
      </div>
    </div>
    </Tilt>
  )
}

export default ProjectCard