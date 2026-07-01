import { PhoneCall, Map, Code2, ShieldAlert, Rocket } from "lucide-react";
import React from "react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A deep-dive session where we map out your operational bottlenecks, product scope, and tech requirements. No sales fluff—just engineering alignment.",
    icon: <PhoneCall className="text-xs h-4 w-4 font-bold text-muted transition-colors duration-200 group-hover:text-primary" />,
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "We deliver a comprehensive project blueprint. This includes interactive user flows, database schemas, and explicit phase-by-phase delivery milestones.",
    icon: <Map className="text-xs h-4 w-4 font-bold text-muted transition-colors duration-200 group-hover:text-primary" />,
  },
  {
    number: "03",
    title: "Development Phase",
    description:
      "Our developers write high-performance code using clean component state architectures. You get access to a private production staging URL updated every single week.",
    icon: <Code2 className="text-xs h-4 w-4 font-bold text-muted transition-colors duration-200 group-hover:text-primary"/>,
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "We push your product through rigorous quality control: end-to-end user tests, mobile layout responsiveness diagnostics, and automated performance optimization audits.",
    icon: <ShieldAlert className="text-xs h-4 w-4 font-bold text-muted transition-colors duration-200 group-hover:text-primary" />,
  },
  {
    number: "05",
    title: "Production Launch",
    description:
      "We safely deploy your systems to live infrastructure. We configure custom domain routing, set up automated analytical indexing, and hand over your codebases.",
    icon: <Rocket className="text-xs h-4 w-4 font-bold text-muted transition-colors duration-200 group-hover:text-primary"/>,
  },
];