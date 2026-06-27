export const PROFILE = {
  fullName: "G. Curt Fulwider",
  tagline: "Learning Sciences | Educational Data Science | Interactive Systems",
  description:
    "Data and learning scientist building interactive, data-driven systems for assessment, motivation, and student growth.",
  intro:
    "My research sits at the intersection of learning sciences, educational data science, and interactive system design. I study how learners think and act inside digital environments, then build tools that turn those behavioral signals into better feedback, stronger evidence, and more useful systems for educators and students.",
  homeSummary:
    "I work on game-based assessment, learning analytics, self-efficacy, and AI-assisted measurement design, with a strong bias toward building usable systems instead of stopping at theory.",
  homeSecondary:
    "Current projects span telemetry pipelines, Bayesian and statistical modeling, dashboarding, and interactive learning environments designed to support assessment, motivation, and student growth.",
  github: "curiotiks",
  orcid: "0000-0002-1362-1805",
} as const;

export const RESEARCH_QUESTIONS = [
  "Can learning analytics be used to assess students' self-efficacy beliefs without relying on self-report alone?",
  "How does competition in game-based learning affect statistical self-efficacy beliefs?",
  "What instructional game mechanics best nurture developing efficacy beliefs and promote learning?",
];

export const RESEARCH_AREAS = [
  "Game-based assessment and stealth assessment",
  "Educational data mining and learning analytics",
  "Self-efficacy and non-cognitive measurement",
  "AI-enhanced learning systems",
  "Motivation in interactive learning",
  "Information literacy and critical thinking",
];

export const RESEARCH_EXPERIENCE = [
  {
    dates: "2023-2025",
    title: "Chief Data Scientist",
    institution: "Censio Analytics",
    detail: "Assessing Non-cognitive Constructs",
    note: "Targeting constructs related to dropping out of college.",
    bullets: [
      "Designed Bayesian network assessment models to infer non-cognitive constructs from gameplay behavior and telemetry.",
      "Built data pipelines for behavioral logs, feature engineering, and model calibration.",
      "Applied machine learning, including Naive Bayes and logistic regression, to evaluate predictive validity and guide model revision.",
      "Led evidence-centered design and assessment specifications with product and research teams.",
    ],
  },
  {
    dates: "Summer 2023",
    title: "Graduate Research Assistant",
    institution: "Florida State University",
    detail: "Broadening Participation of Next Gen. Engineers",
    note: "Advisor: Dr. Jeannine Turner",
    bullets: [
      "Supported external program evaluation of a workshop for HBCU aerospace engineering students.",
      "Built Qualtrics instruments and data collection workflows.",
      "Cleaned, merged, and analyzed survey data and produced summary reports.",
    ],
  },
  {
    dates: "2020-2022",
    title: "Graduate Research Assistant",
    institution: "Florida State University",
    detail: "Physics Playground",
    note: "Advisor: Dr. Valerie J. Shute",
    bullets: [
      "Designed pipelines for gameplay logs and survey data, including cleaning and integration.",
      "Implemented feature engineering to extract fine-grained behavioral indicators from gameplay telemetry.",
      "Delivered analysis-ready datasets and custom variables for learning analytics studies.",
      "Work supported by Institute of Education Sciences award no. R305A170376.",
    ],
  },
  {
    dates: "2017-2018",
    title: "Graduate Research Assistant",
    institution: "Florida State University",
    detail: "Project A+",
    note: "Advisor: Dr. Amelia Anderson",
    bullets: [
      "Supported data collection and transcription for a mixed-methods study.",
      "Developed instructional materials to help librarians better assist individuals with ASD.",
    ],
  },
];

export const TEACHING_EXPERIENCE = [
  {
    dates: "Fall 2025-present",
    title: "Adjunct Instructor",
    institution: "Tallahassee State College, Tallahassee, FL",
    bullets: [
      "Teach STA2023 Introductory Statistics in a fully online, asynchronous format.",
      "Manage multiple simultaneous sections and high-volume student communication.",
      "Overhauled the course page and structure and continue to improve accessibility.",
    ],
  },
  {
    dates: "2020-2025",
    title: "Graduate Assistant in Teaching",
    institution: "Florida State University",
    note: "Courses served as a TA: Basic and Descriptive Statistics, Advanced Topics in Analysis of Variance Applications, Inquiry and Measurement for Practitioners, and Theories of Learning and Cognition in Instruction.",
    bullets: [],
  },
  {
    dates: "2013-2015",
    title: "Instructor",
    institution: "Zhejiang Normal University, Jinhua, Zhejiang, China",
    detail: "English Conversation, Writing, and Cultural Studies",
    bullets: [
      "Designed and taught multiple undergraduate courses on English and Western culture.",
      "Served on panels as a judge for English competitions.",
      "Presented instructional methods for local instructors in the region.",
    ],
  },
];

export const EDUCATION = [
  {
    dates: "2022-2026",
    title: "Ph.D. in Instructional Systems and Learning Technologies",
    institution: "Florida State University, Tallahassee, FL",
    note: "Advisors: Dr. Bret Staudt-Willet and Dr. Valerie J. Shute",
  },
  {
    dates: "2022-2023",
    title: "M.S. in Educational Measurement and Statistics",
    institution: "Florida State University, Tallahassee, FL",
    note: "Advisor: Dr. Russell Almond",
  },
  {
    dates: "2016-2018",
    title: "M.S. in Instructional Systems and Learning Technologies",
    institution: "Florida State University, Tallahassee, FL",
    note: "Advisor: Dr. James Klein",
  },
  {
    dates: "2008-2012",
    title: "B.A. in English Education",
    institution: "Washburn University, Topeka, KS",
    note: "Magna Cum Laude",
  },
];

export const SELECTED_PROJECTS = [
  {
    dates: "2019-present",
    title: "Mean Alchemy",
    institution: "Game-based assessment and learning system",
    bullets: [
      "Designing a game-based learning environment that captures behavioral telemetry to model self-efficacy and mastery with Bayesian networks.",
      "Built the Unity front end with a Supabase and SQL backend plus an analytics pipeline for rapid iteration.",
    ],
  },
  {
    dates: "2020-2022",
    title: "Physics Playground Analytics",
    institution: "Learning analytics and gameplay telemetry",
    bullets: [
      "Built ETL and feature engineering processes for fine-grained gameplay data and survey integration.",
      "Delivered analysis-ready datasets used in multiple publications and presentations.",
    ],
  },
];

export const TECHNICAL_SKILLS = [
  {
    label: "Programming",
    content: "Unity (C#), Python, SQL, JSON, and R",
  },
  {
    label: "Data",
    content: "Bayesian modeling, machine learning, feature engineering, and learning analytics",
  },
  {
    label: "Systems",
    content: "Telemetry pipelines, assessment data workflows, and web hosting",
  },
  {
    label: "Tools",
    content: "Qualtrics, Power BI, Git, Trello, Slack, Mplus, SPSS, Canvas, and related platforms",
  },
  {
    label: "Methods",
    content: "Evidence-centered design, measurement and validation, exploratory data analysis, and A/B testing",
  },
];

export const AWARDS = [
  "Ruby Diamond Future Professor Award, Florida State University (2021)",
  "Finalist for Excellent Performance in the ISLT Masters Program Award, Florida State University (2018)",
];

export const SERVICE = {
  reviewing: [
    "Florida Educational Research Association",
    "International Conference for the Learning Sciences",
    "National Council on Measurement in Education",
    "Association for Educational Communications and Technology",
  ],
  other: [
    "Treasurer for the Florida State University Instructional Systems Students Association (2017)",
    "Guest lecturer for a Learning Analytics course at Teachers College, Columbia University",
  ],
};

export const ABOUT_SECTIONS = [
  {
    title: "Early Path, China, and Family",
    paragraphs: [
      "My path into this work has moved through teaching, design, and later doctoral study rather than a straight line into academia. Early interests in language, communication, and how people grow into difficult work eventually turned into teaching abroad and a much deeper interest in how learning environments shape confidence.",
      "Teaching at Zhejiang Normal University in Jinhua made those questions more concrete. Returning to graduate school at Florida State University gave me the research language and methodological tools to study them more seriously. Family life, including raising kids while finishing graduate training, keeps that work grounded in usefulness rather than abstraction.",
    ],
  },
  {
    title: "How the Work Has Evolved",
    paragraphs: [
      "I began from instructional design and classroom teaching, but my interests kept moving toward the traces learners leave behind in digital systems. That shift led me into game-based assessment, stealth assessment, learning analytics, self-efficacy research, and the design of tools that turn behavior into interpretable evidence.",
      "More recently, that same line of work has expanded toward AI-assisted measurement design, responsible uses of large language models, and interactive systems that help educators act on data rather than just collect it.",
    ],
  },
  {
    title: "Where the Work Is Headed",
    paragraphs: [
      "Right now I am most interested in building reusable research and assessment platforms instead of one-off studies. That means stronger telemetry pipelines, better evidence models, and interfaces that make results understandable to teachers, researchers, and institutional partners.",
      "Longer term, I want to connect research, teaching, and applied consulting in ways that bridge learning sciences, educational data science, and international collaboration, especially in work connected to China and cross-cultural education.",
    ],
  },
] as const;

export const CURRENT_GOALS = [
  "Finish and extend dissertation work on game-based assessment and self-efficacy modeling.",
  "Build research tools that combine theory, telemetry, and AI without losing interpretability.",
  "Connect academic research with practical consulting, teaching, and institutional improvement work.",
] as const;

export const DISSERTATION = {
  title: "Game-Based Assessment and Self-Efficacy Modeling in Interactive Learning Environments",
  summary:
    "Full dissertation materials, defense slides, and the presentation recording live here in one place.",
  supplementalNote:
    "Supplemental materials will continue to be added here as they are cleaned up and prepared for public release.",
} as const;
