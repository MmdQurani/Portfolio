/**
 * Skill categories rendered by SkillsSection (Home + About pages).
 *
 * NOTE: keep every category at the same number of items (4) so all cards
 * render at the exact same height and the grid always looks balanced.
 */
const skills = [
  {
    category: 'Programming Languages',
    icon: '🎨',
    items: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    category: 'Frameworks',
    icon: '🛠️',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next', level: 95 },
      { name: 'Redux', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Libraries',
    icon: '📦',
    items: [
      { name: 'Bootstrap', level: 95 },
      { name: 'Material UI', level: 90 },
      { name: 'React Query', level: 90 },
      { name: 'React Hook Form', level: 90 },
    ],
  },
  {
    category: 'APIs & State',
    icon: '🔗',
    items: [
      { name: 'REST APIs', level: 90 },
      { name: 'Axios', level: 90 },
      { name: 'Fetch API', level: 90 },
      { name: 'State Management', level: 90 },
    ],
  },
  {
    category: 'Tools',
    icon: '✨',
    items: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Vite', level: 90 },
      { name: 'Figma', level: 60 },
    ],
  },
]

export default skills
