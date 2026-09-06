import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Reveal from '../../components/Reveal/Reveal'
import projects from '../../data/projects'

function Projects() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* ===================== PROJECTS HEADER ===================== */}
      <section className="relative overflow-hidden pb-10 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-pulse-glow absolute -top-32 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="My Projects"
              title="Selected work across fintech & web"
              description="A collection of products I've built — from real-time financial platforms to modern, fully responsive websites."
            />
          </Reveal>
        </div>
      </section>

      {/* ===================== PROJECTS GRID ===================== */}
      <section className="relative pb-10 pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 120} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projects