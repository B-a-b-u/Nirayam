export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, scalable and SEO-friendly web applications.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Admin Dashboards",
      "E-Commerce Solutions",
      "Custom Web Applications",
      "API Integrations",
    ],
  },

  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps for iOS and Android.",
    features: [
      "React Native Apps",
      "Authentication",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
      "Maintenance",
    ],
  },

  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Intelligent systems powered by modern AI.",
    features: [
      "Custom Chatbots",
      "RAG Systems",
      "Document Intelligence",
      "LLM Integration",
      "Prediction Models",
      "AI Assistants",
    ],
  },

  {
    id: "automation",
    title: "Automation",
    description:
      "Reduce manual work and improve efficiency.",
    features: [
      "CRM Automation",
      "Email Workflows",
      "Data Synchronization",
      "Business Process Automation",
      "Reporting Systems",
      "Custom Integrations",
    ],
  },
];