export const profile = {
  name: "G. Curt Fulwider",
  site: "curtfulwider.com",
  tagline:
    "Data and learning scientist building interactive, data-driven systems for assessment, motivation, and student growth.",
  intro:
    "My work sits at the intersection of game-based learning, behavioral telemetry, and AI-informed modeling to create usable tools for students and educators.",
  summary:
    "I build interactive and evidence-driven systems for educational data analysis, learning analytics, assessment, and research support.",
  pdfPath: "/files/cv.pdf",
  pdfSourcePath: "/files/main.tex",
  focus: [
    "Game-based and stealth assessment",
    "Educational data mining and learning analytics",
    "Self-efficacy measurement",
    "AI-enhanced learning systems",
    "Motivation and information literacy"
  ],
  roles: [
    "Educational data analysis",
    "Learning analytics and dashboards",
    "Assessment design and validation",
    "Research and evaluation support"
  ],
  cvHighlights: [
    "Ph.D. candidate in Instructional Systems and Learning Technologies at Florida State University",
    "Graduate training in Educational Measurement and Statistics",
    "Builds interactive, data-driven systems for assessment, motivation, and student growth",
    "Research focus on game-based learning, behavioral telemetry, and AI-informed modeling"
  ],
  researchStatement:
    "My research sits at the intersection of learning sciences, educational data science, and interactive system design. I build assessment and learning systems that use AI to turn behavioral signals from digital environments into better feedback, stronger evidence, and more useful tools for educators and students.",
  education: [
    {
      degree: "Ph.D. Instructional Systems and Learning Technologies",
      institution: "Florida State University",
      location: "Tallahassee, FL",
      year: "2022-2026",
      note: "Advisors: Dr. Bret Staudt Willet; Dr. Valerie J. Shute"
    },
    {
      degree: "M.S. Educational Measurement and Statistics",
      institution: "Florida State University",
      location: "Tallahassee, FL",
      year: "2022-2023",
      note: "Advisor: Dr. Russell Almond"
    },
    {
      degree: "M.S. Instructional Systems and Learning Technologies",
      institution: "Florida State University",
      location: "Tallahassee, FL",
      year: "2016-2018",
      note: "Advisor: Dr. James Klein"
    },
    {
      degree: "B.A. in English Education",
      institution: "Washburn University",
      location: "Topeka, KS",
      year: "2008-2012",
      note: "Magna Cum Laude"
    }
  ],
  researchExperience: [
    {
      dates: "2023-2025",
      title: "Chief Data Scientist",
      org: "Censio Analytics",
      context: "Assessing non-cognitive constructs related to dropping out of college.",
      bullets: [
        "Designed Bayesian network assessment models to infer non-cognitive constructs from gameplay behavior and telemetry.",
        "Designed data pipelines for behavioral logs, feature engineering, and model calibration.",
        "Applied machine learning methods including Naive Bayes and logistic regression to evaluate predictive validity.",
        "Led evidence-centered design and assessment specifications with product and research teams."
      ]
    },
    {
      dates: "Summer 2023",
      title: "Graduate Research Assistant",
      org: "Florida State University",
      context: "Broadening Participation of Next Generation Aerospace Engineers; advisor: Dr. Jeannine Turner.",
      bullets: [
        "Supported external program evaluation for an HBCU aerospace engineering workshop.",
        "Built Qualtrics instruments and data collection workflows.",
        "Cleaned, merged, and analyzed survey data and produced summary reports."
      ]
    },
    {
      dates: "2020-2022",
      title: "Graduate Research Assistant",
      org: "Physics Playground, Florida State University",
      context: "Advisor: Dr. Valerie Shute.",
      bullets: [
        "Designed data pipelines for gameplay logs and survey data, including cleaning and integration.",
        "Implemented feature engineering to extract fine-grained behavioral indicators from gameplay telemetry.",
        "Delivered analysis-ready datasets and custom variables for learning analytics studies."
      ]
    },
    {
      dates: "2017-2018",
      title: "Graduate Research Assistant",
      org: "Project A+, Florida State University",
      context: "Advisor: Dr. Amelia Anderson.",
      bullets: [
        "Supported data collection and transcription for a mixed-methods study.",
        "Developed instructional materials to help librarians better assist individuals with ASD."
      ]
    }
  ],
  teaching: [
    {
      dates: "Fall 2025-Present",
      title: "Adjunct Instructor",
      org: "Tallahassee State College",
      bullets: [
        "STA2023 Introductory Statistics, fully online and asynchronous.",
        "Delivered multiple simultaneous sections and managed high-volume student communication.",
        "Overhauled the course page and structure and led ongoing accessibility improvements."
      ]
    },
    {
      dates: "2020-2025",
      title: "Graduate Assistant in Teaching",
      org: "Florida State University",
      bullets: [
        "Basic and Descriptive Statistics",
        "Advanced Topics in Analysis of Variance Applications",
        "Inquiry and Measurement for Practitioners",
        "Theories of Learning and Cognition in Instruction"
      ]
    },
    {
      dates: "2013-2015",
      title: "Instructor",
      org: "Zhejiang Normal University",
      bullets: [
        "Designed and taught undergraduate courses in English conversation, writing, and cultural studies.",
        "Served on panels as a judge for English competitions.",
        "Presented on instructional methods for local instructors in the region."
      ]
    }
  ],
  service: {
    university: [
      "Treasurer for Florida State University Instructional Systems Students Association (2017)",
      "Guest lecturer for a Learning Analytics course at Teachers College, Columbia University"
    ],
    reviewing: [
      "Florida Educational Research Association",
      "International Conference for the Learning Sciences",
      "National Council on Measurement in Education",
      "Association for Educational Communications and Technology"
    ],
    awards: [
      "Finalist for Excellent Performance in the ISLT Masters Program Award, Florida State University (2018)",
      "Ruby Diamond Future Professor Award, Florida State University (2021)"
    ]
  },
  manuscripts: [
    "Dissertation: Game-based assessment and self-efficacy modeling in interactive learning environments",
    "LLM-Generated Self-Efficacy Scales: Validity evidence for ChatGPT-generated instruments",
    "Heritage Language Learners on Reddit: A mixed-methods analysis of community discourse"
  ],
  consulting: {
    slug: "consulting",
    title: "Educational Data Analysis Consulting",
    status: "Private for now",
    summary:
      "A forthcoming page for consulting services in educational data analysis, dashboarding, measurement, and research support."
  }
} as const;
