export const projects = [
  {
    slug: "mean-alchemy",
    title: "Mean Alchemy",
    status: "Active",
    timeframe: "Ongoing",
    summary:
      "A current project exploring how interactive systems can support assessment, motivation, and student growth.",
    focus: ["Game-based learning", "Behavioral telemetry", "AI-informed modeling"],
    body: "This project is a live research and product space. The current emphasis is on building interactive systems that can capture meaningful evidence of learning without flattening the experience into a traditional test."
  },
  {
    slug: "learning-analytics-tools",
    title: "Learning Analytics Dashboards and Tools",
    status: "Active",
    timeframe: "CHAW, FSU",
    summary:
      "Dashboards and utility tools for educational data workflows and research use.",
    focus: [
      "Instructional decision support",
      "Workflow-friendly data summaries",
      "Research-facing reporting"
    ],
    body: "This work packages research data into tools that are actually usable by teams. The goal is not just analysis, but repeatable reporting and clearer decision support for instructional and research contexts."
  },
  {
    slug: "physics-playground-analytics",
    title: "Physics Playground Analytics",
    status: "Archived",
    timeframe: "2020-2022",
    summary:
      "Analytics work centered on the Physics Playground game-based learning environment.",
    focus: [
      "Game-based learning",
      "Student interaction traces",
      "Archived research workflow"
    ],
    body: "This project focused on telemetry and learning evidence inside the Physics Playground environment. It remains a useful reference point for prior analytics and game-based learning work."
  }
] as const;

export type Project = (typeof projects)[number];
