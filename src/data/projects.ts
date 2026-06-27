export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  year: number;
  status: string;
  visualLabel: string;
  links?: ProjectLink[];
  note?: string;
  sections: ProjectSection[];
};

export const PROJECTS: Project[] = [
  {
    id: 'mean-alchemy',
    title: 'Mean Alchemy',
    description:
      'A game-based learning and assessment environment built to study self-efficacy, mastery, and behavioral evidence inside interactive play.',
    year: 2026,
    status: 'In Progress',
    visualLabel: 'Game-Based Assessment',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Mean Alchemy is the central research platform for my dissertation and related follow-on work. It brings together gameplay design, evidence-centered assessment, and telemetry collection so I can study how self-efficacy and learning develop inside an interactive environment.',
          'The project is designed to do more than produce a playable system. It also functions as a research instrument that can support model building, validation, and future experiments.',
        ],
      },
      {
        title: 'Current Direction',
        bullets: [
          'Refining the game loop and assessment design so gameplay produces interpretable evidence.',
          'Linking telemetry features to Bayesian and statistical models of learner beliefs and performance.',
          'Preparing the platform for dissertation-related analyses and future public-facing materials.',
        ],
        paragraphs: [],
      },
    ],
  },
  {
    id: 'llm-self-efficacy-scale-validation',
    title: 'LLM-Generated Self-Efficacy Scale Validation',
    description:
      'Validation work examining whether LLM-assisted item generation can support defensible self-efficacy measurement.',
    year: 2026,
    status: 'In Analysis',
    visualLabel: 'Measurement Validation',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'This project examines whether large language models can help generate or refine self-efficacy scale items without sacrificing measurement quality.',
          'The aim is not novelty for its own sake. The goal is to test whether AI-assisted scale development can be rigorous enough to support real research and applied measurement work.',
        ],
      },
      {
        title: 'What I Am Looking At',
        bullets: [
          'Item quality, coherence, and construct coverage.',
          'How generated items compare with more traditional development workflows.',
          'What kinds of human review and validation remain necessary before use.',
        ],
        paragraphs: [],
      },
    ],
  },
  {
    id: 'data-literacy-game',
    title: 'Untitled Data Literacy Game',
    description:
      'An early-stage game concept focused on helping learners read data critically, question evidence, and make better decisions under uncertainty.',
    year: 2026,
    status: 'Concept Stage',
    visualLabel: 'Data Literacy',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'This project is still in concept development, but the direction is clear: a game that helps learners build better habits around interpreting data, spotting weak claims, and reasoning with evidence.',
          'I want the design to avoid shallow quiz mechanics and instead push players to make judgments, compare evidence, and reflect on uncertainty.',
        ],
      },
      {
        title: 'Design Questions',
        bullets: [
          'What kinds of mechanics make data interpretation feel active rather than didactic?',
          'How can the system make uncertainty legible instead of treating every problem as having one obvious answer?',
          'What evidence of data literacy can be captured through interaction rather than only through post-tests?',
        ],
        paragraphs: [],
      },
    ],
  },
  {
    id: 'paper-scroll',
    title: 'Paper Scroll',
    description:
      'An app concept for staying current with research by surfacing new papers, reducing overload, and helping decide what is worth reading next.',
    year: 2026,
    status: 'Prototype',
    visualLabel: 'Research Workflow',
    note:
      'A public repository link will be added here once the current app build is ready for wider release.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Paper Scroll is aimed at a common research problem: too much to read, too little time, and weak support for deciding what deserves attention.',
          'The project direction is to build a workflow that helps researchers track new work, triage what matters, and stay engaged with literature without treating the process like an endless inbox.',
        ],
      },
      {
        title: 'Why It Matters',
        bullets: [
          'Research discovery is fragmented across feeds, alerts, and saved links.',
          'Most tools help collect papers more than they help decide what to read next.',
          'A better workflow could support both ongoing scholarship and teaching preparation.',
        ],
        paragraphs: [],
      },
    ],
  },
  {
    id: 'ios-app-market-inventory',
    title: 'iOS App Market Inventory',
    description:
      'An inventory and descriptive analysis of iOS educational games in the App Store, with the write-up now being prepared.',
    year: 2026,
    status: 'Writing Up',
    visualLabel: 'App Store Analysis',
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/curiotiks/iOS_edu_games',
      },
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'This project catalogs and describes educational game offerings in the iOS App Store. It is meant to make the market easier to inspect rather than relying on anecdotal impressions of what educational apps look like.',
          'The current phase is turning the inventory and analysis into a tighter public write-up that is easier to browse and cite.',
        ],
      },
      {
        title: 'Focus',
        bullets: [
          'Documenting what kinds of educational games are available in the store.',
          'Looking at genres, mechanics, topical coverage, and how products position themselves.',
          'Turning the dataset and observations into a cleaner narrative for public release.',
        ],
        paragraphs: [],
      },
    ],
  },
];
