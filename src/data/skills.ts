export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SCSS/SASS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Flask", "Python"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Oracle"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "DigitalOcean", "Vercel", "Firebase", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Chrome Extensions", "Telegram Bots", "Web Scraping", "Git", "Docker"],
  },
  {
    title: "Product & Workflow",
    skills: [
      "Requirements breakdown",
      "System design",
      "Agile delivery",
      "Stakeholder communication",
      "Technical documentation",
    ],
  },
];

export const skillsSnapshot = [
  "React & Next.js",
  "TypeScript",
  "Node.js & NestJS",
  "PostgreSQL & MongoDB",
  "AWS & Vercel",
];
