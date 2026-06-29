export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Fast, scalable and SEO-optimized websites, dashboards and custom web applications tailored to your business.",
    image: "/services/web_dev.svg",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Admin Dashboards",
      "E-Commerce Solutions",
      "Custom Web Applications",
      "REST & GraphQL APIs",
      "Third-party Integrations",
      "SEO Optimization",
    ],
  },

  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications with native-like performance for Android and iOS.",
    image: "/services/app_dev.svg",
    features: [
      "React Native Development",
      "Android & iOS Apps",
      "Authentication",
      "Push Notifications",
      "Offline Support",
      "Cloud Integration",
      "App Store Deployment",
      "Maintenance & Updates",
    ],
  },

  {
    id: "ai",
    title: "AI Solutions",
    description:
      "AI-powered software that automates workflows, understands documents and delivers intelligent insights.",
        image: "/services/ai_solutions.svg",
    features: [
      "Custom AI Chatbots",
      "RAG Applications",
      "LLM Integration",
      "Document Intelligence",
      "OCR Solutions",
      "Predictive Analytics",
      "Recommendation Systems",
      "AI Assistants",
    ],
  },

  {
    id: "automation",
    title: "Business Automation",
    description:
      "Automate repetitive processes and connect your business systems to improve productivity.",
        image: "/services/ai_automation.svg",
    features: [
      "Workflow Automation",
      "CRM Integration",
      "Email Automation",
      "ERP Integration",
      "Business Process Automation",
      "Custom API Integration",
      "Reporting Dashboards",
      "Data Synchronization",
    ],
  },
];