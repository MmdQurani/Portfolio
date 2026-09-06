import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Reveal from '../../components/Reveal/Reveal'
import skills from '../../data/skills'
import projects from '../../data/projects'
import heroImg from '../../assets/hero.png'
import myPhoto from '../../assets/My_Photo.jpg'

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechNova Studio',
    period: '2023 — Present',
    icon: '💻',
    points: [
      'Lead the front-end architecture for a SaaS platform used by 20k+ users.',
      'Mentored a team of 4 developers and introduced a reusable component library.',
      'Cut page load time by 40% through code-splitting and performance tuning.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'CreativeLab Agency',
    period: '2021 — 2023',
    icon: '🖥️',
    points: [
      'Delivered 15+ responsive marketing sites and web apps for global clients.',
      'Collaborated with designers to translate Figma mockups into pixel-perfect UIs.',
      'Built accessible, SEO-friendly pages using React and Tailwind CSS.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance',
    period: '2019 — 2021',
    icon: '🚀',
    points: [
      'Worked with small businesses on landing pages, portfolios and e-commerce stores.',
      'Gained hands-on experience with JavaScript, APIs and responsive design.',
    ],
  },
]

const stats = [
  { value: `${projects.length}+`, label: 'Projects Built' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Dedication' },
]

const aboutHighlights = [
  'Pixel-perfect, responsive and accessible interfaces',
  'Modern stack: React, TypeScript & Tailwind CSS',
  'Performance-first approach with a keen eye for UX',
]

function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section id="home" className="relative pb-24 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-pulse-glow absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-secondary/20 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary-dark/20 blur-[120px]" />
          <div className="animate-orb absolute left-8 top-24 h-40 w-40 rounded-full bg-secondary/15 blur-[100px]" />
          <div
            className="animate-orb absolute bottom-28 left-1/3 h-56 w-56 rounded-full bg-secondary-dark/15 blur-[120px]"
            style={{ animationDelay: '3s' }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(203,172,249,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(203,172,249,0.6) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage:
                'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Text column */}
          <Reveal direction="up" className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              Available for freelance work
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] sm:text-5xl xl:text-6xl">
              Hi, I'm Mohammad — I build{' '}
              <span className="bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent">
                modern web
              </span>{' '}
              experiences
            </h1>

            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/85 lg:mx-0">
              I'm a front-end developer passionate about crafting fast, accessible and
              beautifully designed digital products that solve real problems and delight users.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button to="/projects">
                See My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>

            <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-surface/60 px-4 py-5 text-center backdrop-blur"
                >
                  <p className="font-display text-2xl font-bold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Image column */}
          <Reveal delay={200} direction="up" className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="animate-pulse-glow absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-secondary/30 via-transparent to-secondary-dark/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-surface-light to-primary">
                <img
                  src={heroImg}
                  alt="Mohammad — Frontend Developer"
                  className="mx-auto h-auto w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="animate-float absolute -left-3 top-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-xl backdrop-blur sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/15 text-lg">
                ⚛️
              </span>
              <div className="text-left">
                <p className="text-xs text-white/60">Currently using</p>
                <p className="text-sm font-semibold text-white">React & Vite</p>
              </div>
            </div>

            <div className="animate-float-delay absolute -right-3 bottom-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-xl backdrop-blur sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/15 text-lg">
                🎨
              </span>
              <div className="text-left">
                <p className="text-xs text-white/60">Design</p>
                <p className="text-sm font-semibold text-white">Tailwind CSS</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section id="about" className="relative py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          {/* Visual */}
          <Reveal direction="left" className="relative order-2 mx-auto w-full max-w-md lg:order-1">
            <div className="animate-pulse-glow absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface via-surface to-secondary/10 p-8 text-center shadow-2xl">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl border-2 border-secondary/30 shadow-[0_0_35px_rgba(203,172,249,0.35)]">
                <img
                  src={myPhoto}
                  alt="Mohammad"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">Mohammad</h3>
              <p className="mt-1 text-sm text-secondary">Frontend Developer & Designer</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                On a mission to blend stunning aesthetics with rock-solid engineering.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['React', 'Tailwind', 'TypeScript', 'UI/UX'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right" className="order-1 lg:order-2">
            <SectionTitle
              align="left"
              eyebrow="About Me"
              title="Turning ideas into digital reality"
            />
            <p className="leading-relaxed text-white/85">
              I'm a passionate developer who loves turning complex problems into simple, elegant
              and intuitive user experiences. With a strong eye for design and a focus on clean
              code, I build products that are not only great to look at but also a joy to use.
            </p>
            <ul className="mt-6 space-y-4">
              {aboutHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-secondary/15 text-sm text-secondary">
                    ✓
                  </span>
                  <span className="text-white/85">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button to="/about" variant="secondary">
                More About Me
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="My Skills"
            title="Tools & technologies I work with"
            description="A blend of front-end craftsmanship and design thinking that helps me ship polished, high-quality products."
          />

          <div className="grid gap-7 md:grid-cols-3">
            {skills.map((category, index) => (
              <Reveal key={category.category} delay={index * 120}>
                <div
                  className="h-full rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_25px_70px_-25px_rgba(203,172,249,0.4)]"
                >
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
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-white/85">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-secondary to-secondary-dark transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section id="projects" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Selected work I'm proud of"
            description="A curated snapshot of projects where design and engineering come together to deliver real impact."
          />

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={index * 120} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button to="/projects" variant="secondary">
              View All Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-orb absolute left-1/3 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />
          <div
            className="animate-orb absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-secondary-dark/15 blur-[120px]"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="My professional journey"
            description="The path, milestones and lessons that shaped how I build for the web."
          />

          <div className="relative">
            {/* central gradient timeline */}
            <span className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-secondary/0 via-secondary/80 to-secondary/0 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {experience.map((item, i) => (
                <div key={item.role} className="relative md:grid md:grid-cols-2 md:items-center md:gap-12">
                  {/* node badge */}
                  <div className="absolute left-6 top-8 z-10 -translate-x-1/2 md:left-1/2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary bg-primary shadow-[0_0_0_5px_rgba(203,172,249,0.15),0_0_20px_rgba(203,172,249,0.6)]">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                    </span>
                  </div>

                  {/* even => left, odd => right */}
                  <div className={`ml-16 md:ml-auto md:w-auto ${i % 2 === 0 ? 'md:col-start-1 md:pr-2' : 'md:col-start-2 md:pl-2'}`}>
                    <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_25px_60px_-20px_rgba(203,172,249,0.45)] sm:p-7">
                        {/* left gradient accent */}
                        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-secondary to-secondary-dark" />
                        {/* hover glow */}
                        <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-2xl shadow-[0_0_20px_rgba(203,172,249,0.2)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                              {item.icon}
                            </span>
                            <div>
                              <h3 className="font-display text-lg font-semibold text-white">
                                {item.role}
                              </h3>
                              <p className="text-sm font-medium text-secondary">{item.company}</p>
                            </div>
                          </div>
                          <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                            {item.period}
                          </span>
                        </div>

                        <ul className="mt-5 space-y-2.5">
                          {item.points.map((point, j) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm leading-relaxed text-white/85 transition-all duration-300 hover:border-secondary/30 hover:bg-white/[0.04]"
                            >
                              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-secondary/15 text-[10px] font-bold text-secondary">
                                {j + 1}
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="cta" className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-secondary/20 bg-gradient-to-br from-secondary/20 via-surface to-surface px-8 py-16 text-center shadow-2xl lg:px-16">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-secondary/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-secondary-dark/20 blur-[100px]" />

          <Reveal direction="zoom" className="relative">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              Let's Collaborate
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea? Let's build something{' '}
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                amazing
              </span>{' '}
              together
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/80">
              Whether it's a full product, a website redesign or just a friendly chat — I'd love
              to hear about your project.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/contact">Get In Touch</Button>
              <Button variant="secondary" href="#">
                Download Resume
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home