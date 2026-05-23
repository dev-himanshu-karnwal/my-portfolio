export type ExperienceItem = {
  id: string;
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
    id: "freelance-2025-present",
    company: "Independent · Freelance",
    role: "Freelance Software Engineer",
    period: "2025 – Present",
    location: "India · Remote",
    summary:
      "Back on independent work—partnering with clients on full-stack products from discovery through production. Engagements span greenfield builds, feature delivery, and hardening existing systems.",
    responsibilities: [
      "Scope and deliver full-stack features for client products and internal tools.",
      "Own technical decisions across data models, APIs, UI flows, and deployment.",
      "Communicate progress, risks, and tradeoffs clearly with clients and stakeholders.",
      "Ship iteratively with an emphasis on reliability and maintainable codebases.",
      "Support launches, monitoring, and post-release improvements.",
    ],
    highlights: [
      "End-to-end delivery on client-facing products",
      "Contract and project-based collaborations",
      "Production systems across web and desktop surfaces",
    ],
  },
  {
    id: "dct-2024-2025",
    company: "DCT Technology Pvt. Ltd.",
    role: "Software Engineer",
    period: "2024 – 2025",
    location: "India",
    summary:
      "Full-time engineer building production web applications with ownership across frontend, backend, and deployment. Work spanned product execution, architecture decisions, and close collaboration with PM and business stakeholders.",
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
  {
    id: "freelance-2021-2024",
    company: "Independent · Freelance",
    role: "Freelance Software Engineer",
    period: "2021 – 2024",
    location: "India · Remote",
    summary:
      "Built digital products for clients across SaaS, desktop, and cloud—learning to own delivery from requirements through deployment while balancing speed with long-term maintainability.",
    responsibilities: [
      "Deliver full-stack applications for client briefs across web, desktop, and cloud.",
      "Translate business requirements into clear technical plans and milestones.",
      "Implement frontends, APIs, databases, and deployment pipelines.",
      "Iterate with clients on feedback, scope changes, and production readiness.",
      "Maintain and extend shipped systems as usage and requirements evolved.",
    ],
    highlights: [
      "Multiple client products shipped to production",
      "Breadth across SaaS, desktop apps, and cloud tooling",
      "Strong foundation in end-to-end ownership",
    ],
  },
];
