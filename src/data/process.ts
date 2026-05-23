export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  details: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Product understanding",
    description: "Clarify the problem, users, and success criteria before building.",
    details: [
      "Review requirements and identify edge cases early",
      "Align on MVP vs. future scope with stakeholders",
      "Define measurable outcomes for the release",
    ],
  },
  {
    step: 2,
    title: "Planning & architecture",
    description: "Structure the system for clarity, maintainability, and delivery speed.",
    details: [
      "Break work into shippable milestones",
      "Choose stack and patterns that fit the product lifecycle",
      "Document key flows and integration points",
    ],
  },
  {
    step: 3,
    title: "UI implementation",
    description: "Build interfaces that are clean, responsive, and intentional.",
    details: [
      "Component-driven development with consistent design tokens",
      "Accessibility and performance as defaults",
      "Iterate on UX with feedback from real usage",
    ],
  },
  {
    step: 4,
    title: "Backend engineering",
    description: "Reliable APIs, data integrity, and secure handling of business logic.",
    details: [
      "Schema design aligned with product workflows",
      "Validation, error handling, and observability",
      "Integration with third-party services where needed",
    ],
  },
  {
    step: 5,
    title: "Deployment & iteration",
    description: "Ship confidently and improve based on production signals.",
    details: [
      "CI/CD-friendly builds and environment configuration",
      "Staging validation before production releases",
      "Monitor, fix, and refine after launch",
    ],
  },
];
