export type WhyChooseItem = {
  icon: "zap" | "dollar" | "refresh" | "shield";
  title: string;
  description: string;
};

export const whyChooseData: WhyChooseItem[] = [
  {
    icon: "zap",
    title: "Fast Delivery",
    description:
      "Launch your MVP or product in weeks instead of months through agile development and streamlined engineering workflows.",
  },
  {
    icon: "dollar",
    title: "Transparent Pricing",
    description:
      "Fixed-price engagements or milestone-based delivery with complete visibility. No hidden costs or unexpected surprises.",
  },
  {
    icon: "refresh",
    title: "Weekly Progress Updates",
    description:
      "Stay informed with regular demos, staging previews, and transparent communication throughout the entire development lifecycle.",
  },
  {
    icon: "shield",
    title: "Long-Term Partnership",
    description:
      "Beyond launch, we provide maintenance, feature enhancements, infrastructure support, and continuous technical guidance.",
  },
];