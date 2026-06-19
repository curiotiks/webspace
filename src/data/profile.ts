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

export const CONTACT = {
  personalEmail: {
    user: "curiotiks",
    domain: "icloud.com",
  },
  academicEmail: {
    user: "cfulwider",
    domain: "fsu.edu",
  },
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
    dates: "2025-present",
    title: "Learning Analytics Dashboards and Tools",
    institution: "Center for Health Advocacy & Wellness, Florida State University",
    note: "Public reporting dashboard of campus health trends plus improvements to internal assessment and survey instruments.",
    bullets: [
      "Built and maintained dashboard and reporting workflows for public-facing campus health trend reporting.",
      "Improved internal assessment instruments and survey workflows for healthier and more reliable data collection.",
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
