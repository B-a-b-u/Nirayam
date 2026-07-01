export interface ProjectStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;

  rightTitle: string;
  tagline: string;
  challenge: string;
  solutionSummary: string;
  stats: ProjectStat[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "lms-platform",

    title: "Learning Management Platform",

    category: "Web Application",

    description:
      "Designed and developed a modern Learning Management System that enables institutions to manage courses, students, assessments, and learning progress from a single platform.",

    imageSrc: "/case-studies/lms.png",

    rightTitle: "Custom Learning Management Platform",

    tagline: "A Complete Digital Learning Experience",

    challenge:
      "The client required a centralized platform to replace multiple disconnected tools used for course management, assessments, student enrollment, and instructor communication.",

    solutionSummary:
      "Built a scalable LMS featuring secure authentication, role-based access, course management, quizzes, assignments, progress tracking, certificates, and an intuitive admin dashboard with responsive design.",

    stats: [
      {
        value: "Role-Based",
        label: "Access Control",
      },
      {
        value: "Responsive",
        label: "Cross Platform",
      },
      {
        value: "Real-Time",
        label: "Progress Tracking",
      },
      {
        value: "Single",
        label: "Learning Platform",
      },
    ],
  },

  {
    id: "finance-ai",

    title: "AI Money Tracking Application",

    category: "AI Solution",

    description:
      "Built an intelligent personal finance application that helps users monitor expenses, manage budgets, and receive AI-driven financial insights.",

    imageSrc: "/case-studies/money-tracking.png",

    rightTitle: "AI Personal Finance Assistant",

    tagline: "Making Personal Finance Smarter",

    challenge:
      "Users found it difficult to manually categorize expenses, monitor monthly spending, and understand where their money was being spent.",

    solutionSummary:
      "Developed an AI-powered expense tracker with automatic categorization, spending analytics, budgeting tools, financial summaries, and intelligent recommendations to improve financial decision-making.",

    stats: [
      {
        value: "AI",
        label: "Expense Analysis",
      },
      {
        value: "Auto",
        label: "Categorization",
      },
      {
        value: "Interactive",
        label: "Analytics",
      },
      {
        value: "Budget",
        label: "Planning",
      },
    ],
  },

  {
    id: "content-automation",

    title: "AI Content Production System",

    category: "Business Automation",

    description:
      "Developed an intelligent content production workflow that automates research, script creation, media generation, voice synthesis, and publishing.",

    imageSrc: "/case-studies/content-automation.png",

    rightTitle: "AI Content Automation Workflow",

    tagline: "From Idea to Published Content",

    challenge:
      "Creating high-quality content required repetitive manual work across multiple tools, making the publishing process slow and difficult to scale.",

    solutionSummary:
      "Designed an end-to-end automation workflow integrating AI content generation, voice synthesis, media processing, approval workflows, and multi-platform publishing into a seamless production pipeline.",

    stats: [
      {
        value: "End-to-End",
        label: "Automation",
      },
      {
        value: "Multi-Step",
        label: "AI Workflow",
      },
      {
        value: "24/7",
        label: "Content Pipeline",
      },
      {
        value: "Multi-Platform",
        label: "Publishing",
      },
    ],
  },
];