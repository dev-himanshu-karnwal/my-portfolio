export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    value: "250+",
    label: "HackerRank problems",
    description: "Consistent practice in algorithms and problem-solving",
  },
  {
    value: "5★",
    label: "HackerRank badges",
    description: "Strong fundamentals across core CS topics",
  },
  {
    value: "9+",
    label: "Production projects",
    description: "Systems built across web, desktop, cloud, and extensions",
  },
  {
    value: "Full-stack",
    label: "Execution scope",
    description: "Frontend, backend, databases, and deployment ownership",
  },
];
