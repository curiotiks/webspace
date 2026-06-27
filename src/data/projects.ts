export const PROJECTS = [
  {
    id: 'dissertation',
    title: 'Dissertation and Defense Materials',
    description:
      'Written dissertation, defense slides, and the presentation recording gathered in one place for public access.',
    year: 2026,
    status: 'Current',
    heroImage: '/images/projects/dissertation.jpg',
    link: '/dissertation',
  },
  {
    id: 'mean-alchemy',
    title: 'Mean Alchemy',
    description:
      'A game-based learning and assessment environment designed to model self-efficacy and mastery through gameplay telemetry and Bayesian evidence models.',
    year: 2026,
    status: 'In Progress',
    heroImage: '/images/projects/mean-alchemy.jpg',
  },
  {
    id: 'teaching-consulting',
    title: 'Teaching, Assessment, and Consulting Work',
    description:
      'Course redesign, measurement support, dashboarding, and educational data analysis work that connects research and applied practice.',
    year: 2026,
    status: 'Developing',
    heroImage: '/images/projects/teaching-consulting.jpg',
    link: '/consulting',
  },
] as const;
