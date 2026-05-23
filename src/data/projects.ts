export type ProjectCategory =
  | "Web Application"
  | "Desktop"
  | "Extension"
  | "Cloud"
  | "Mobile"
  | "Automation";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  role: string;
  stack: string[];
  featured: boolean;
  image: string;
  accent: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: { label: string; description: string }[];
  challenges: string[];
  outcomes: string[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    slug: "blue-collar-job-portal",
    title: "Blue-collar Job Portal",
    shortDescription:
      "Job discovery and application platform for skilled trade workers and employers.",
    description:
      "A full-stack portal connecting blue-collar workers with verified employers, with structured job listings, applications, and admin oversight.",
    category: "Web Application",
    role: "Full Stack Engineer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    image: "/images/projects/job-portal.svg",
    accent: "#3d3a36",
    overview:
      "Built a production-ready job portal focused on clarity for workers and efficiency for employers. The platform supports job posting, search, applications, and role-based dashboards.",
    problem:
      "Traditional job boards are not optimized for skilled trade hiring—poor mobile experience, unclear requirements, and high friction for applicants without formal resumes.",
    solution:
      "Designed a streamlined flow with skill-based profiles, location-aware search, and employer tools to manage listings and applicant pipelines in one place.",
    features: [
      "Role-based dashboards for workers and employers",
      "Job search with filters for trade, location, and pay range",
      "Application tracking and status updates",
      "Admin moderation for listings and users",
      "Responsive UI optimized for mobile-first usage",
    ],
    architecture: [
      {
        label: "Client",
        description: "Next.js App Router with server components for SEO and fast initial loads.",
      },
      {
        label: "API",
        description: "RESTful Node.js services with validation and auth middleware.",
      },
      {
        label: "Data",
        description: "PostgreSQL with normalized schemas for jobs, users, and applications.",
      },
    ],
    challenges: [
      "Balancing simple UX for workers with rich data needs for employers",
      "Designing scalable search without over-engineering on day one",
    ],
    outcomes: [
      "End-to-end hiring workflow from listing to application review",
      "Maintainable codebase structured for future matching features",
    ],
    learnings: [
      "Domain-specific UX matters more than feature count in vertical products",
      "Early schema design for applications saved refactoring later",
    ],
  },
  {
    slug: "restaurant-ordering-system",
    title: "Restaurant Ordering & Management",
    shortDescription:
      "Ordering, kitchen workflow, and management system for restaurant operations.",
    description:
      "Integrated system for customer ordering, kitchen queue management, and back-office reporting.",
    category: "Web Application",
    role: "Full Stack Engineer",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    featured: true,
    image: "/images/projects/restaurant.svg",
    accent: "#6b8f71",
    overview:
      "A restaurant operations platform covering menu management, real-time order flow, and staff dashboards for kitchen and front-of-house teams.",
    problem:
      "Fragmented tools for orders, kitchen display, and inventory create delays, order errors, and poor visibility during peak hours.",
    solution:
      "Unified web application with real-time order updates, role-specific views, and centralized menu and status management.",
    features: [
      "Digital menu with categories and modifiers",
      "Real-time order queue for kitchen staff",
      "Order status tracking from placed to served",
      "Basic sales and order history reporting",
      "Multi-role access for admin, staff, and counter",
    ],
    architecture: [
      {
        label: "Frontend",
        description: "React SPA with optimistic UI for order placement.",
      },
      {
        label: "Realtime",
        description: "WebSocket layer for kitchen and counter synchronization.",
      },
      {
        label: "Backend",
        description: "Node.js services with MongoDB for flexible menu documents.",
      },
    ],
    challenges: [
      "Keeping order state consistent under concurrent updates",
      "Designing kitchen UI for speed in high-noise environments",
    ],
    outcomes: [
      "Reduced manual coordination between counter and kitchen",
      "Single source of truth for active orders during service",
    ],
    learnings: [
      "Realtime features need clear state machines, not ad-hoc events",
      "Staff-facing UI should prioritize legibility over visual flair",
    ],
  },
  {
    slug: "crm-desktop-app",
    title: "CRM Desktop App",
    shortDescription:
      "Desktop CRM for client tracking, pipelines, and follow-ups.",
    description:
      "Cross-platform desktop application for managing leads, contacts, and sales activity offline-capable workflows.",
    category: "Desktop",
    role: "Full Stack Engineer",
    stack: ["Electron", "React", "SQLite", "TypeScript"],
    featured: true,
    image: "/images/projects/crm.svg",
    accent: "#3d3a36",
    overview:
      "Built a desktop-first CRM for teams that need reliable client data, pipeline visibility, and fast local performance without browser tab clutter.",
    problem:
      "Web-only CRMs can feel slow for daily power users, and teams needed offline access during client visits.",
    solution:
      "Electron-based desktop app with local SQLite storage, sync-ready architecture, and focused views for pipeline and follow-ups.",
    features: [
      "Contact and company management",
      "Deal pipeline with stage tracking",
      "Activity log and follow-up reminders",
      "Local data persistence with export options",
      "Keyboard-friendly navigation for power users",
    ],
    architecture: [
      {
        label: "Shell",
        description: "Electron main process handling window and local DB access.",
      },
      {
        label: "Renderer",
        description: "React UI with shared state for pipeline and contacts.",
      },
      {
        label: "Storage",
        description: "SQLite for structured CRM entities and query performance.",
      },
    ],
    challenges: [
      "Managing Electron security boundaries between main and renderer",
      "Designing migrations for local SQLite schema updates",
    ],
    outcomes: [
      "Responsive desktop experience for daily sales workflows",
      "Foundation for optional cloud sync in future iterations",
    ],
    learnings: [
      "Desktop apps reward disciplined data modeling from the start",
      "Keep the renderer thin—business logic belongs in testable modules",
    ],
  },
  {
    slug: "typolens-chrome-extension",
    title: "TypoLens",
    shortDescription:
      "Chrome extension for spelling and grammar checks across the web.",
    description:
      "Browser extension that surfaces writing issues inline with minimal disruption to the user's flow.",
    category: "Extension",
    role: "Frontend Engineer",
    stack: ["TypeScript", "Chrome APIs", "React"],
    featured: false,
    image: "/images/projects/typolens.svg",
    accent: "#6b8f71",
    overview:
      "TypoLens brings lightweight proofreading to any text field on the web through a Chrome extension with a clean overlay UI.",
    problem:
      "Context switching to external grammar tools breaks focus when writing emails, forms, or long-form content in the browser.",
    solution:
      "Content-script based detection with an unobtrusive highlight layer and actionable suggestions on demand.",
    features: [
      "Inline highlighting of spelling and grammar issues",
      "One-click suggestions and replacements",
      "Configurable rules and ignored domains",
      "Lightweight popup for settings and stats",
    ],
    architecture: [
      {
        label: "Background",
        description: "Service worker coordinating settings and API calls.",
      },
      {
        label: "Content",
        description: "DOM-aware scripts for text extraction and overlay rendering.",
      },
      {
        label: "UI",
        description: "Extension popup built with React for settings management.",
      },
    ],
    challenges: [
      "Handling diverse page DOM structures without breaking layouts",
      "Performance on content-heavy pages",
    ],
    outcomes: [
      "Usable proofreading flow without leaving the current tab",
      "Extension packaged for Chrome Web Store distribution readiness",
    ],
    learnings: [
      "Extension development requires defensive DOM handling",
      "User trust depends on minimal permissions and clear behavior",
    ],
  },
  {
    slug: "aws-event-notification-system",
    title: "AWS Event-driven Notifications",
    shortDescription:
      "Serverless notification pipeline triggered by application events.",
    description:
      "Event-driven architecture on AWS for reliable, scalable notification delivery across channels.",
    category: "Cloud",
    role: "Backend Engineer",
    stack: ["AWS Lambda", "SQS", "SNS", "Node.js", "DynamoDB"],
    featured: true,
    image: "/images/projects/aws-events.svg",
    accent: "#3d3a36",
    overview:
      "Designed a serverless notification system that decouples producers from delivery, with retries, dead-letter handling, and channel routing.",
    problem:
      "Monolithic notification logic created bottlenecks, failed deliveries under load, and tight coupling to core application services.",
    solution:
      "Event bus pattern with SQS queues, Lambda processors, and SNS for fan-out to email, SMS, and in-app channels.",
    features: [
      "Async event ingestion from application services",
      "Per-channel delivery workers with retry policies",
      "Dead-letter queues for failed message inspection",
      "Template-based notification payloads",
      "CloudWatch metrics for throughput and errors",
    ],
    architecture: [
      {
        label: "Ingress",
        description: "API Gateway / direct publish to SQS from app services.",
      },
      {
        label: "Processing",
        description: "Lambda consumers normalizing events and routing by type.",
      },
      {
        label: "Delivery",
        description: "SNS topics fanning out to email, SMS, and webhook handlers.",
      },
    ],
    challenges: [
      "Idempotency for duplicate events",
      "Cost control for high-volume notification types",
    ],
    outcomes: [
      "Decoupled core app from notification delivery concerns",
      "Improved reliability with observable failure paths",
    ],
    learnings: [
      "Serverless shines for spiky, async workloads with clear boundaries",
      "Invest in DLQs and alarms before scaling traffic",
    ],
  },
  {
    slug: "personal-cashflow-app",
    title: "Personal Cashflow App",
    shortDescription:
      "Personal finance tracker for income, expenses, and monthly cashflow.",
    description:
      "Focused app for tracking transactions, categories, and monthly financial snapshots.",
    category: "Web Application",
    role: "Full Stack Engineer",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: false,
    image: "/images/projects/cashflow.svg",
    accent: "#6b8f71",
    overview:
      "A personal finance tool built for clarity—quick entry, category insights, and month-over-month cashflow without bloated feature sets.",
    problem:
      "Spreadsheets work but are tedious for daily logging; many finance apps are overloaded with features irrelevant to personal tracking.",
    solution:
      "Minimal transaction ledger with dashboards for spending patterns and monthly net cashflow.",
    features: [
      "Income and expense entry with categories",
      "Monthly summary and trend views",
      "Recurring transaction support",
      "Export for backup and analysis",
    ],
    architecture: [
      {
        label: "App",
        description: "Next.js with authenticated routes and server actions.",
      },
      {
        label: "ORM",
        description: "Prisma over PostgreSQL for typed data access.",
      },
      {
        label: "Analytics",
        description: "Aggregated queries for monthly rollups and charts.",
      },
    ],
    challenges: [
      "Accurate month boundaries for recurring items",
      "Keeping the UI fast with growing transaction history",
    ],
    outcomes: [
      "Reliable personal ledger with actionable monthly views",
      "Clean schema extensible for budgets and goals",
    ],
    learnings: [
      "Personal tools succeed when logging takes seconds, not minutes",
      "Aggregate tables help once transaction volume grows",
    ],
  },
  {
    slug: "plantark",
    title: "PlantArk",
    shortDescription:
      "Plant care companion for tracking watering, light, and growth notes.",
    description:
      "Mobile-friendly web app helping users manage houseplant care schedules and health notes.",
    category: "Mobile",
    role: "Full Stack Engineer",
    stack: ["React", "Firebase", "Tailwind CSS"],
    featured: false,
    image: "/images/projects/plantark.svg",
    accent: "#3d3a36",
    overview:
      "PlantArk helps plant owners maintain consistent care routines with reminders, plant profiles, and simple health logging.",
    problem:
      "Inconsistent watering and forgotten care tasks lead to preventable plant health issues.",
    solution:
      "Per-plant profiles with care schedules, reminders, and a lightweight journal for observations.",
    features: [
      "Plant library with species and location tags",
      "Watering and fertilizing reminders",
      "Care history timeline",
      "Photo notes for growth tracking",
    ],
    architecture: [
      {
        label: "Client",
        description: "React PWA with offline-friendly caching for core views.",
      },
      {
        label: "Backend",
        description: "Firebase Auth and Firestore for user-scoped plant data.",
      },
      {
        label: "Notifications",
        description: "Scheduled reminders via Firebase Cloud Messaging.",
      },
    ],
    challenges: [
      "Timezone-safe reminder scheduling",
      "Balancing free-tier Firebase limits with growth",
    ],
    outcomes: [
      "Repeatable care habits through low-friction logging",
      "Scalable data model for additional plant metadata",
    ],
    learnings: [
      "Habit apps need defaults—smart presets beat empty forms",
      "Reminders must be trustworthy or users abandon the product",
    ],
  },
  {
    slug: "100x-bot",
    title: "100x Bot",
    shortDescription:
      "Telegram bot for automated workflows and community interactions.",
    description:
      "Telegram bot handling commands, notifications, and integrations for community operations.",
    category: "Automation",
    role: "Backend Engineer",
    stack: ["Node.js", "Telegram Bot API", "MongoDB", "Redis"],
    featured: false,
    image: "/images/projects/100x-bot.svg",
    accent: "#6b8f71",
    overview:
      "100x Bot automates repetitive community and ops tasks in Telegram—command handlers, scheduled messages, and lightweight integrations.",
    problem:
      "Manual moderation and repetitive announcements do not scale as community size grows.",
    solution:
      "Modular bot architecture with command plugins, rate limiting, and admin controls.",
    features: [
      "Custom slash commands and admin tools",
      "Scheduled broadcasts to groups",
      "User activity logging for moderation",
      "Webhook-based deployment for reliability",
    ],
    architecture: [
      {
        label: "Bot runtime",
        description: "Node.js service using Telegram Bot API with webhook mode.",
      },
      {
        label: "Cache",
        description: "Redis for session state and rate limit counters.",
      },
      {
        label: "Persistence",
        description: "MongoDB for user prefs and audit logs.",
      },
    ],
    challenges: [
      "Handling Telegram API rate limits gracefully",
      "Secure admin command authorization",
    ],
    outcomes: [
      "Reduced manual overhead for community managers",
      "Extensible plugin structure for new commands",
    ],
    learnings: [
      "Bots need explicit permission models from day one",
      "Webhook deployments beat long polling for production stability",
    ],
  },
  {
    slug: "oasis-notes",
    title: "Oasis Notes",
    shortDescription:
      "Structured note-taking app with folders, search, and markdown support.",
    description:
      "Clean notes application for capturing ideas, technical notes, and project documentation.",
    category: "Web Application",
    role: "Full Stack Engineer",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    featured: false,
    image: "/images/projects/oasis-notes.svg",
    accent: "#3d3a36",
    overview:
      "Oasis Notes is a focused writing environment—folders, full-text search, and markdown editing without the weight of enterprise knowledge bases.",
    problem:
      "Heavy note tools slow down quick capture; plain text lacks structure and findability over time.",
    solution:
      "Fast editor with folder hierarchy, instant search, and sync across devices via Supabase.",
    features: [
      "Markdown editor with live preview",
      "Nested folders and tags",
      "Full-text search across notes",
      "Autosave and revision-friendly UX",
    ],
    architecture: [
      {
        label: "Frontend",
        description: "Next.js with client editor and optimistic saves.",
      },
      {
        label: "Auth & DB",
        description: "Supabase for auth, row-level security, and realtime sync.",
      },
      {
        label: "Search",
        description: "Postgres full-text search for note content.",
      },
    ],
    challenges: [
      "Conflict handling for concurrent edits",
      "Editor performance on long documents",
    ],
    outcomes: [
      "Low-latency writing experience with reliable sync",
      "Secure multi-user data isolation via RLS policies",
    ],
    learnings: [
      "Notes apps live or die on save reliability and search speed",
      "Supabase RLS is worth designing upfront, not bolting on later",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
