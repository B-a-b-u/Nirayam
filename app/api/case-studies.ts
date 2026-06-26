export interface ProjectStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string; // Used for the left-side list card
  imageSrc: string;
  
  // Right-side explicit formatting data
  rightTitle: string;
  tagline: string;
  challenge: string;
  solutionSummary: string;
  stats: ProjectStat[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "ecommerce-beauty",
    title: "Beauty Growth Campaign",
    category: "E-commerce & Growth",
    description: "Scaled digital infrastructure and digital visibility for a premium direct-to-consumer skincare manufacturer.",
    imageSrc: "/image.png",
    
    // Right Side Explicit Mapping
    rightTitle: "E-commerce Beauty Brand",
    tagline: "Increases Revenue by 400%",
    challenge: "Low online visibility and poor conversion rates despite having quality products.",
    solutionSummary: "Comprehensive SEO strategy, influencer partnerships, and conversion optimization.",
    stats: [
      { value: "400%", label: "Revenue Growth" },
      { value: "180%", label: "Conversion Rate" },
      { value: "350%", label: "Organic Traffic" },
      { value: "450%", label: "ROAS" }
    ]
  },

  {
    id: "ai-automation",
    title: "Content Creation Automation using N8N",
    category: "AI Automation",
    description: "Utilized n8n and developed a content creation automation from script creation to voice-overs.",
    imageSrc: "/image.png",
    
    // Right Side Explicit Mapping
    rightTitle: "Content Creation Automation",
    tagline: "Increases Revenue by 400%",
    challenge: "Low online visibility and poor conversion rates despite having quality products.",
    solutionSummary: "Comprehensive SEO strategy, influencer partnerships, and conversion optimization.",
    stats: [
      { value: "400%", label: "Revenue Growth" },
      { value: "180%", label: "Conversion Rate" },
      { value: "350%", label: "Organic Traffic" },
      { value: "450%", label: "ROAS" }
    ]
  },
  {
    id: "inventory-automation",
    title: "MomentumForge Logistics",
    category: "AI & Automation",
    description: "Architected custom cross-platform synchronization pipelines to optimize multi-channel internal supply streams.",
    imageSrc: "/image.png",
    
    // Right Side Explicit Mapping
    rightTitle: "Logistics & Supply Brand",
    tagline: "Reduces Manual Labor by 70%",
    challenge: "Manual inventory tracking across distributed spreadsheets leaking hours in labor costs.",
    solutionSummary: "Custom database schema architecture, instant webhook alerts, and automated cron triggers.",
    stats: [
      { value: "70%", label: "Manual Reduction" },
      { value: "99.8%", label: "Sync Accuracy" },
      { value: "24/7", label: "Automated Tracking" },
      { value: "20h+", label: "Saved Weekly" }
    ]
  }
];