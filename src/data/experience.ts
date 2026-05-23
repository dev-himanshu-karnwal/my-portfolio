export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "DCT Technology Pvt. Ltd.",
    role: "Software Engineer",
    period: "Present",
    location: "India",
    summary:
      "Full-stack engineer building production web applications with ownership across frontend, backend, and deployment. Work spans product execution, architecture decisions, and close collaboration with PM and business stakeholders.",
    responsibilities: [
      "Design and implement full-stack features from requirements through production release.",
      "Own technical decisions for modules including data models, APIs, and UI flows.",
      "Collaborate with PMs on scope, timelines, and tradeoffs between speed and quality.",
      "Review code, improve reliability, and maintain systems used by real users.",
      "Support deployments, monitoring, and iterative improvements post-launch.",
    ],
    highlights: [
      "End-to-end delivery on client-facing products",
      "Cross-functional work with product and engineering leads",
      "Production systems across web and desktop surfaces",
    ],
  },
];
