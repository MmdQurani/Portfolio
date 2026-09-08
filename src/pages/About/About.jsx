import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Reveal from '../../components/Reveal/Reveal'
import SkillsSection from '../../components/SkillsSection/SkillsSection'
import Languages from '../../components/Languages/Languages'
import SoftSkills from '../../components/SoftSkills/SoftSkills'
import EducationSection from '../../components/EducationSection/EducationSection'
import myPhoto from '../../assets/My_Photo.jpg'

const personalInfo = [
  {
    label: "Email",
    value: "mmdqurani@gmail.com",
    href: "mailto:mmdqurani@gmail.com",
  },
  { label: "Phone", value: "+98 991 722 0842", href: "tel:+989917220842" },
  { label: "Location", value: "Marand, Tabriz — Iran", href: null },
  { label: "Date of Birth", value: "February / March 2006", href: null },
];

const languages = [
  { name: "Azerbaijani (Turkish)", level: "Native", percent: 100, note: "5/5" },
  { name: "Persian", level: "Native", percent: 100, note: "5/5" },
  { name: "English", level: "Intermediate", percent: 40, note: "2/5" },
];

const softSkills = [
  "Teamwork & Collaboration",
  "Problem Solving",
  "Time Management",
  "Fast Learning",
  "Attention to Detail",
  "Effective Communication",
];

const education = [
  {
    title: "Associate Degree in Computer Software",
    school: "Islamic Azad University — Marand",
    date: "Expected 2026",
    detail:
      "Studying software engineering fundamentals, programming and web technologies.",
  },
  {
    title: "High School Diploma — Network & Software",
    school: "Technical High School",
    date: "Graduated 2026",
    detail: "Diploma focused on computer networking and software engineering.",
  },
];

function About() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* ===================== ABOUT HERO ===================== */}
      <section className="relative overflow-hidden pb-16 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-pulse-glow absolute -top-32 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[150px]" />
          <div className="animate-orb absolute left-24 top-40 h-44 w-44 rounded-full bg-secondary-dark/15 blur-[110px]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Photo */}
          <Reveal direction="left" className="relative mx-auto w-full max-w-sm">
            <div className="animate-pulse-glow absolute -inset-6 -z-10 rounded-full bg-secondary/20 blur-2xl" />
            <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-[2rem] border-2 border-secondary/30 shadow-2xl">
              <img
                src={myPhoto}
                alt="Mohammad Qurani"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/70 to-transparent" />
            </div>
          </Reveal>

          {/* Intro */}
          <Reveal direction="right">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              About Me
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent">
                Mohammad Qurani
              </span>
            </h1>
            <p className="mt-2 font-display text-xl font-medium text-secondary">
              Frontend Developer
            </p>
            <p className="mt-5 leading-relaxed text-white/85">
              I'm a frontend developer with a passion for React.js. I've been
              working with React.js for a few years now, and along the way I've
              taken on a wide range of projects — both in teams and solo — from
              gold and capital-market investment fund platforms to e-commerce
              sites, admin panels and online academies. I always love being part
              of a team where I can both learn and share what I know.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== PERSONAL INFO ===================== */}
      <section className="relative py-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionTitle
            align="left"
            eyebrow="Personal Info"
            title="Who I am at a glance"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personalInfo.map((info, index) => (
              <Reveal key={info.label} delay={index * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-2 break-all text-sm font-medium text-white transition-colors hover:text-secondary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-medium text-white">
                      {info.value}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <SkillsSection
        eyebrow="My Skills"
        title="Technologies I work with"
        description="A focused set of frontend tools and technologies I use to build fast, polished and responsive products."
      />

      {/* ===================== LANGUAGES ===================== */}
      <Languages languages={languages} />

      {/* ===================== SOFT SKILLS ===================== */}
      <SoftSkills skills={softSkills} />

      {/* ===================== EDUCATION ===================== */}
      <EducationSection education={education} />
      <Footer />
    </div>
  );
}

export default About;
