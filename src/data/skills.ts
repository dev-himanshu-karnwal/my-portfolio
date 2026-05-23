export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "React Native (Expo)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS/SASS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Flask",
      "REST APIs",
      "WebSockets",
      "JWT",
      "RBAC",
      "OTP",
      "SSO",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Oracle",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "AWS",
      "DigitalOcean",
      "Vercel",
      "Firebase Hosting",
      "Linux",
      "DNS & email configuration",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Modular architecture",
      "Low-level design (LLD)",
      "Microservices",
      "Real-time systems",
      "Scalable API design",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Chrome extensions",
      "Telegram bots",
      "Web scraping",
      "Workflow automation",
    ],
  },
];

export const skillsSnapshot = [
  "React & Next.js",
  "Node.js & NestJS",
  "Multi-tenant SaaS & RBAC",
  "PostgreSQL & MongoDB",
  "AWS & CI/CD",
];
