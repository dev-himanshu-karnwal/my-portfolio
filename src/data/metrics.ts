export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    value: "5+",
    label: "Years Building Products",
    description:
      "Work delivery across web, mobile, browser extensions, and cloud systems",
  },
  {
    value: "20+",
    label: "Products & Systems Built",
    description:
      "SaaS platforms, mobile apps, Chrome extensions, and production cloud deployments",
  },
  {
    value: "500+",
    label: "HackerRank Problems Solved",
    description:
      "Algorithmic and data structure practice with 6 certificates earned",
  },
  {
    value: "End-to-End",
    label: "Engineering Ownership",
    description:
      "From architecture and API design through CI/CD and production deployment",
  },
];
