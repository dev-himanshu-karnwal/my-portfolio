export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
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
    slug: "plantark",
    title: "PlantArk",
    shortDescription:
      "Multi-vendor e-commerce marketplace for buying and selling plants, seeds, and gardening products in Australia.",

    description:
      "Built and scaled the frontend experience for an Australian plant marketplace platform featuring product discovery, vendor listings, responsive shopping flows, and API-driven commerce architecture.",
    category: "SaaS Platform",

    role: "Frontend Engineer • Web Designer",

    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
      "Responsive UI",
    ],

    featured: true,

    image: "/images/projects/plantark.jpg",

    accent: "#3d3a36",

    overview:
      "Developed the customer-facing frontend for PlantArk, an Australian online marketplace focused on plants, seeds, and gardening products. Worked on scalable UI architecture, category navigation, product discovery flows, responsive layouts, and API-driven commerce experiences optimized for conversion and usability.",

    problem:
      "The platform required a modern and scalable marketplace frontend capable of handling large product catalogs, category-heavy navigation, responsive shopping experiences, and seamless integration with backend commerce APIs while maintaining strong usability across devices.",

    solution:
      "Built a modular React.js frontend architecture integrated with backend APIs for products, categories, carts, and order workflows. Focused heavily on responsive UX, optimized rendering, clean browsing flows, and scalable component systems suitable for a growing marketplace platform.",

    features: [
      "Marketplace-style product browsing experience",
      "Advanced category-based navigation flows",
      "Responsive shopping experience across devices",
      "API-driven product listings and inventory states",
      "Cart and checkout integration",
      "Product detail pages optimized for conversions",
      "Reusable frontend component architecture",
      "Mobile-first responsive layouts",
    ],

    architecture: [
      {
        label: "Frontend Architecture",
        description:
          "Built using React.js with modular and reusable component-based architecture for scalable marketplace development.",
      },
      {
        label: "API Integration",
        description:
          "Integrated REST APIs for products, categories, cart management, inventory handling, and order workflows.",
      },
      {
        label: "Responsive Experience",
        description:
          "Implemented responsive layouts and optimized UI behavior for desktop, tablet, and mobile shopping experiences.",
      },
    ],

    challenges: [
      "Managing responsive marketplace layouts with large product catalogs",
      "Handling asynchronous API-driven inventory and product states",
      "Maintaining fast rendering performance across category-heavy pages",
      "Designing scalable frontend structures for future marketplace growth",
    ],

    outcomes: [
      "Delivered a production-ready marketplace frontend for an Australian client",
      "Created scalable UI foundations for future feature expansion",
      "Improved product discovery and browsing experience",
      "Built clean separation between frontend presentation and backend commerce systems",
    ],

    learnings: [
      "Marketplace UX depends heavily on navigation clarity and product discovery speed",
      "Scalable frontend architecture becomes critical as catalogs and workflows grow",
      "Responsive commerce experiences require performance-focused rendering strategies",
      "API-first e-commerce systems demand robust loading, caching, and state handling",
    ],
  },
  {
    slug: "100x-bot",

    title: "100x.bot",

    shortDescription:
      "AI-powered browser automation platform with Chrome extension workflows, page augmentation, smart tables, and multi-agent browser actions.",

    description:
      "Worked on the frontend platform and Chrome extension for 100x.bot — an AI browser automation system enabling workflow recording, page-level automation, smart data operations, and browser-based AI agents.",

    category: "AI Automation Platform",

    role: "Frontend Engineer • Chrome Extension Developer",

    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Chrome Extension APIs",
      "Browser Automation",
      "Tailwind CSS",
      "AI Integration",
    ],

    featured: true,

    image: "/images/projects/100x-bot.svg",

    accent: "#6b8f71",

    overview:
      "Contributed to the frontend platform and Chrome extension architecture for 100x.bot — an AI-powered browser automation platform designed for workflow recording, smart browser actions, page augmentation, and multi-step automation across websites. Worked on scalable frontend systems, extension interfaces, browser interaction layers, and responsive product experiences.",

    problem:
      "Traditional browser workflows are repetitive, fragmented, and difficult to automate without complex tooling. The platform required a browser-native automation system capable of interacting deeply with websites, workflows, tabs, and page content while remaining scalable and user-friendly.",

    solution:
      "Developed frontend systems and browser extension interfaces enabling workflow automation, page-level actions, AI-assisted interactions, and browser augmentation features. Built reusable UI systems and extension interaction layers designed for scalable automation workflows and responsive user experiences.",

    features: [
      "Chrome extension-based browser automation",
      "Workflow recording and browser interaction systems",
      "Page-level automation and augmentation features",
      "Responsive SaaS frontend platform",
      "AI-assisted workflow interactions",
      "Dynamic dashboard and data-driven interfaces",
      "Cross-page browser workflow support",
      "Reusable component-based frontend architecture",
    ],

    architecture: [
      {
        label: "Frontend Platform",
        description:
          "Built scalable React.js and Next.js frontend systems powering the AI automation platform and workflow interfaces.",
      },
      {
        label: "Browser Extension",
        description:
          "Worked with Chrome Extension APIs, content scripts, and browser interaction layers to support workflow automation and page augmentation.",
      },
      {
        label: "Automation Layer",
        description:
          "Implemented frontend interaction systems supporting browser workflows, automation actions, and AI-assisted operations across websites.",
      },
    ],

    challenges: [
      "Handling reliable browser interactions across different website structures",
      "Building scalable extension UI systems for automation-heavy workflows",
      "Maintaining responsive performance inside browser-based environments",
      "Designing frontend systems flexible enough for rapidly evolving AI product features",
    ],

    outcomes: [
      "Contributed to a production-grade AI browser automation platform",
      "Delivered scalable frontend and extension systems for workflow automation",
      "Improved browser interaction usability and responsive UX",
      "Built reusable foundations supporting future automation features and workflows",
    ],

    learnings: [
      "Browser automation products require careful balance between flexibility, reliability, and usability",
      "Chrome extension architecture becomes significantly more complex at production scale",
      "AI workflow systems evolve rapidly, making modular frontend architecture critical",
      "Responsive UX matters even more in productivity and automation-focused applications",
    ],
  },
  {
    slug: "oasis-notes",

    title: "Oasis Notes",

    shortDescription:
      "Multi-tenant SaaS productivity platform with tenant isolation, RBAC, dashboards, and scalable workspace architecture.",

    description:
      "Built and scaled a multi-tenant SaaS platform focused on workspace productivity, tenant-aware workflows, secure authentication, dashboard systems, and modular backend architecture for organization-level operations.",

    category: "SaaS Multi-tenant",

    role: "Full Stack Engineer",

    stack: [
      "React.js",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Multi-tenant Architecture",
      "RBAC",
    ],

    featured: true,

    image: "/images/projects/oasis-notes.svg",

    accent: "#3d3a36",

    overview:
      "Worked on a production-grade multi-tenant SaaS application designed for organizational productivity and collaboration workflows. Contributed to frontend dashboards, tenant-aware application flows, authentication systems, RBAC implementation, and scalable backend architecture supporting secure workspace isolation.",

    problem:
      "The platform required a scalable SaaS architecture capable of securely handling multiple organizations within a shared infrastructure while maintaining strict tenant isolation, permission management, and scalable productivity workflows.",

    solution:
      "Developed modular frontend and backend systems using React.js, NestJS, and PostgreSQL with tenant-aware routing, role-based access control, authentication workflows, and scalable API structures optimized for long-term SaaS growth.",

    features: [
      "Multi-tenant SaaS architecture",
      "Tenant-level data isolation",
      "Role-based access control (RBAC)",
      "Authentication and session management",
      "Workspace and dashboard systems",
      "Tenant-aware frontend routing",
      "Scalable modular backend architecture",
      "Responsive productivity-focused UI",
    ],

    architecture: [
      {
        label: "Frontend Platform",
        description:
          "Built React.js frontend systems with tenant-aware routing, dashboard workflows, and responsive workspace experiences.",
      },
      {
        label: "Backend Architecture",
        description:
          "Implemented modular NestJS backend structures for authentication, RBAC, tenant management, and scalable business workflows.",
      },
      {
        label: "Data Layer",
        description:
          "Used PostgreSQL with tenant isolation strategies and scalable relational data modeling for SaaS workloads.",
      },
    ],

    challenges: [
      "Maintaining strict tenant isolation across APIs and application workflows",
      "Designing scalable RBAC systems for organization-level permissions",
      "Building reusable SaaS architecture without tightly coupling tenant logic",
      "Managing complex dashboard and workspace states efficiently",
    ],

    outcomes: [
      "Delivered a scalable multi-tenant SaaS platform foundation",
      "Implemented secure organization-level isolation and permission systems",
      "Built maintainable frontend and backend architecture for long-term scalability",
      "Improved workspace usability and dashboard responsiveness",
    ],

    learnings: [
      "Multi-tenant SaaS complexity grows rapidly without strict architectural boundaries",
      "RBAC design impacts nearly every layer of a production SaaS system",
      "Modular NestJS architecture becomes critical as SaaS platforms scale",
      "Tenant-aware frontend routing and state management require disciplined system design",
    ],
  },
  {
    slug: "forex-network-platform",
    title: "Forex Network Platform",
    shortDescription:
      "Multi-role forex trading and referral platform with wallet management, commission workflows, and hierarchical partner systems.",
  
    description:
      "Large-scale fintech platform designed for forex trading operations, referral network management, wallet handling, and multi-level commission tracking. Built to support high user activity, role-based access control, transaction visibility, and operational scalability across admins, partners, and traders.",
  
    category: "Fintech Platform",
  
    role: "Full Stack Engineer",
  
    stack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Socket.io",
      "Tailwind CSS",
      "JWT Authentication",
    ],
  
    featured: true,
  
    image: "/images/projects/rangersfx.svg",
  
    accent: "#4f46e5",
  
    overview:
      "Developed a multi-role trading ecosystem supporting referral structures, commission tracking, wallet operations, and trading activity management. The platform unified administrative operations, user onboarding, partner hierarchy management, and financial reporting into a centralized operational system.",
  
    problem:
      "Trading communities and referral-driven financial platforms often struggle with fragmented user management, unclear commission visibility, delayed transaction updates, and operational complexity across growing partner networks.",
  
    solution:
      "Built a centralized platform enabling traders, partners, and administrators to operate through role-specific dashboards with synchronized wallet systems, referral tracking, commission management, and operational reporting.",
  
    features: [
      "Multi-role authentication and access control",
      "Referral and partner hierarchy management",
      "Commission and reward tracking system",
      "Wallet balance and transaction management",
      "Trading activity visibility and reporting",
      "Admin dashboard for operational oversight",
      "Secure authentication and protected workflows",
      "Responsive dashboards optimized for multiple devices",
    ],
  
    architecture: [
      {
        label: "Frontend Platform",
        description:
          "Built responsive dashboard interfaces with modular UI architecture and role-specific workflows for traders, partners, and administrators.",
      },
      {
        label: "Backend Services",
        description:
          "Developed REST API services for authentication, commission calculations, transaction handling, referral relationships, and operational workflows.",
      },
      {
        label: "Data & Access Layer",
        description:
          "Designed MongoDB schemas for hierarchical user relationships, transaction records, wallet balances, and financial activity logs.",
      },
      {
        label: "Security & Permissions",
        description:
          "Implemented JWT-based authentication, route protection, and granular permission management across different user roles.",
      },
    ],
  
    challenges: [
      "Managing deeply nested referral structures and commission distribution logic",
      "Maintaining transactional consistency for wallet and commission operations",
      "Designing scalable user-role relationships and hierarchical data flows",
      "Handling financial reporting visibility across multiple permission levels",
      "Balancing operational complexity with a clean user experience",
    ],
  
    outcomes: [
      "Centralized operational management across trading, referral, and commission workflows",
      "Improved visibility into financial activity and partner performance",
      "Reduced manual tracking effort for administrators and network managers",
      "Created scalable architecture capable of supporting growing partner ecosystems",
    ],
  
    learnings: [
      "Financial systems require strict consistency and audit-friendly data handling",
      "Hierarchical relationship modeling becomes increasingly complex at scale",
      "Role-based workflow isolation is critical in multi-user fintech systems",
      "Operational dashboards must prioritize clarity over visual complexity",
    ],
  },
  {
    slug: "blue-collar-workforce-platform",
    title: "Blue-Collar Workforce Platform",
    shortDescription:
      "Scalable workforce hiring platform connecting skilled trade workers with verified employers through trust-first mobile workflows.",

    description:
      "Built a production-oriented workforce marketplace focused on blue-collar hiring across industries such as construction, electrical, plumbing, mechanical, and labor services. The platform supports Admin, Employer, and Worker ecosystems with role-driven onboarding, business verification pipelines, location-aware job discovery, and lightweight hiring workflows optimized for mobile-first users without traditional resumes.",

    category: "Mobile Application",

    role: "Founding Full Stack Engineer • Devops Engineer",

    stack: [
      "React Native (Expo)",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Role-Based Access Control",
      "Cloud Media Storage",
    ],

    featured: true,

    image: "/images/projects/blue-collar-platform.svg",

    accent: "#3d3a36",

    overview:
      "Engineered a mobile-first hiring ecosystem designed specifically for India’s blue-collar workforce, enabling workers and employers to connect through simplified trust-based workflows instead of traditional resume-heavy recruitment systems.",

    problem:
      "Conventional job portals are heavily optimized for white-collar hiring and create unnecessary friction for blue-collar workers who often lack resumes, formal qualifications, or desktop access. Existing platforms also fail to establish trust between employers and workers during early-stage interactions.",

    solution:
      "Designed a trust-first onboarding model allowing users to browse jobs and worker listings before authentication, significantly reducing entry friction. Implemented a multi-role architecture with worker verification systems, employer business profiles, role-aware workflows, application tracking, and scalable backend modules optimized for future expansion.",

    features: [
      "Multi-role ecosystem with Admin, Employer, and Worker workflows",
      "Trust-first onboarding with delayed authentication strategy",
      "Location-aware job discovery and worker search experience",
      "Employer business profile management with verification workflows",
      "Worker identity verification using government-issued documents",
      "Role-specific onboarding and profile management pipelines",
      "Application lifecycle management: Applied, Shortlisted, Hired",
      "Mobile-first UX optimized for low-friction blue-collar hiring",
      "Admin moderation system for jobs, workers, and employer verification",
      "Reporting and trust-safety workflows for suspicious listings",
      "Review and rating system tied to completed hiring interactions",
      "Scalable modular backend architecture using NestJS",
    ],

    architecture: [
      {
        label: "Mobile Client",
        description:
          "React Native (Expo) application delivering lightweight and responsive workflows optimized for field workers and employers across low-end and mid-range mobile devices.",
      },
      {
        label: "Backend Services",
        description:
          "NestJS-based modular backend with role-aware APIs, JWT authentication, validation pipelines, onboarding orchestration, and verification management.",
      },
      {
        label: "Data Layer",
        description:
          "MongoDB schema architecture designed for flexible user models, job listings, applications, verification states, and employer-business relationships.",
      },
      {
        label: "Access Control",
        description:
          "Role-based access control system enforcing isolated workflows and permissions across Admin, Employer, and Worker ecosystems.",
      },
    ],

    challenges: [
      "Designing low-friction onboarding flows for non-technical users without compromising platform trust",
      "Balancing guest browsing accessibility with authentication-gated actions",
      "Structuring scalable role-based workflows while keeping the mobile UX simple",
      "Handling verification and moderation pipelines for workers, businesses, and job listings",
      "Designing hiring workflows without relying on resumes, messaging systems, or payment gateways",
      "Optimizing data structures for location-aware discovery and multi-business employer relationships",
    ],

    outcomes: [
      "Created an end-to-end workforce hiring ecosystem tailored for blue-collar recruitment",
      "Reduced onboarding friction through delayed-authentication architecture",
      "Established scalable foundations for future integrations such as multilingual support, chat, and payment systems",
      "Designed modular backend services ready for production-scale iteration and feature expansion",
      "Delivered a mobile-first UX aligned with real-world usage patterns of field workers and contractors",
    ],

    learnings: [
      "Trust-building mechanisms are more critical than feature density in workforce marketplaces",
      "Guest-mode browsing significantly improves first-time user engagement in high-friction domains",
      "Mobile-first architecture is essential for blue-collar workforce products in emerging markets",
      "Verification workflows directly impact platform credibility and hiring quality",
      "Role separation and workflow isolation become increasingly important as marketplace complexity grows",
    ],
  },
  {
    slug: "rapiddine",
    title: "RapidDine",
    shortDescription:
      "Cloud-driven restaurant ordering, real-time kitchen queue, and operational analytics for front-of-house, kitchen, and management teams.",
    description:
      "Comprehensive restaurant management system designed to streamline ordering workflows, unify kitchen operations, and provide actionable reporting. The solution delivers a seamless digital experience for both staff and management, reducing operational friction during peak hours and minimizing order errors via synchronized, real-time updates.",
    category: "Restaurant Management System",
    role: "Full Stack Engineer • Devops Engineer",
    stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "REST APIs",
    ],
    featured: false,
    image: "/images/projects/restaurant.svg",
    accent: "#6b8f71",
    overview:
      "Developed a robust operations platform for restaurants, combining a digital menu, order management, kitchen display systems, and staff accessibility tools. The system ensures real-time status visibility from order placement to service completion, empowering teams to deliver prompt, error-free service even under high demand.",
    problem:
      "Restaurants relying on paper tickets and scattered digital tools struggle with miscommunication, order delays, and operational bottlenecks, particularly during busy shifts. Lack of real-time coordination causes kitchen confusion, lost orders, and inefficient reporting, impacting both service quality and business insights.",
    solution:
      "Engineered a centralized web application that digitally manages menu offerings, routes live orders to appropriate kitchen stations using WebSockets, and maintains a synchronized view of active and historical orders for staff and managers. All roles—admin, kitchen, counter—operate from unified, role-specific dashboards tightly integrated with data persistence and analytics.",
    features: [
      "Interactive digital menu with category, modifier, and availability controls",
      "Instant order placement and live kitchen order queue with preparation timers",
      "Role-based dashboards for counter, kitchen, and admin functions",
      "Comprehensive order status management (placed → in progress → served)",
      "Sales, performance, and inventory analytics reporting",
      "Centralized menu management and dynamic pricing",
      "Real-time kitchen and counter synchronization using Socket.io",
      "Mobile-optimized interface for staff across devices",
    ],
    architecture: [
      {
        label: "Frontend Experience",
        description:
          "React.js SPA architected with modular UI components, stateful order flows, and mobile-first design for staff accessibility.",
      },
      {
        label: "Realtime Order Flow",
        description:
          "Socket.io-powered bidirectional communication syncing order and status events between counter and multiple kitchen stations.",
      },
      {
        label: "Backend & Persistence",
        description:
          "Node.js REST API services with MongoDB for flexible menu document structures, order/event logs, and analytics aggregation.",
      },
      {
        label: "Access Control",
        description:
          "Role-based authentication with granular permissions for admin, kitchen, and front-of-house users.",
      },
    ],
    challenges: [
      "Ensuring atomicity and real-time consistency of order state across concurrent kitchen and counter interactions",
      "Designing kitchen and counter UIs for ultra-fast, glanceable operation in noisy, high-traffic environments",
      "Building robust role separation and audit trails to track order assignment, progression, and modifications",
      "Handling dynamic menu changes and out-of-stock events during service without disrupting active orders",
      "Optimizing event-driven WebSocket workflow to minimize latency and support multiple simultaneous connections",
    ],
    outcomes: [
      "Eliminated manual miscommunication between service and kitchen teams, reducing order delays and preparation errors",
      "Enabled instant, transparent tracking of all orders through preparation and service lifecycles",
      "Provided actionable analytics and order history for management, supporting business planning and performance optimization",
      "Created an extensible platform architecture ready for integration with POS, payment, and inventory systems",
      "Drove measurable improvements in staff coordination and customer turnaround time during high-traffic periods",
    ],
    learnings: [
      "Effective real-time systems in hospitality require explicit, well-typed state machines rather than loose event triggers",
      "Glanceable, low-distraction UX for staff dramatically improves speed and accuracy in high-pressure environments",
      "Operational resilience depends on robust order recovery, persistent audit logs, and granular permissions control",
      "Coordinating across multiple user types (admin, staff, kitchen) demands clear, role-specific workflow isolation",
    ],
  },
  {
    slug: "kameti-ledger",
    title: "Kameti Ledger",
    shortDescription:
      "Desktop-based financial ledger and chit fund management system with advanced payment tracking, auditability, and flexible installment handling.",

    description:
      "Enterprise-grade desktop financial management platform built for managing Kametis (Chit Funds) with complex real-world payment scenarios, audit trails, enrollments, withdrawals, and explainable financial calculations.",

    category: "FinTech Desktop Application",

    role: "Tech Lead • Full Stack Engineer",

    stack: [
      "Electron",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "TailwindCSS",
      "TanStack Query",
      "Zustand",
      "Chart.js",
    ],

    featured: true,

    image: "/images/projects/kameti-ledger.svg",

    accent: "#3f4a5a",

    overview:
      "Architected and developed a desktop-first financial ledger platform for managing Kametis with advanced installment workflows, flexible payment adjustments, withdrawal management, and fully explainable financial calculations.",

    problem:
      "Traditional Kameti operations are often managed manually through notebooks, spreadsheets, and fragmented records, leading to calculation mistakes, missing payment history, poor visibility into dues, and zero auditability for financial decisions.",

    solution:
      "Designed a modular financial management system with event-driven payment tracking, multi-entry installment support, withdrawal workflows, calculation logs, and real-time reporting to handle complex real-world Kameti operations with transparency and reliability.",

    features: [
      "Multi-kameti financial management system",
      "Advanced installment tracking with partial and extra payment handling",
      "Flexible adjustment engine for future installment settlements",
      "Monthly withdrawal workflows with custom month-wise payout rules",
      "Joint enrollment and multi-user participation support",
      "Financial audit logs with explainable calculation breakdowns",
      "Interactive dashboards with payment and progress analytics",
      "Document uploads for KYC and agreement management",
      "Keyboard-optimized desktop workflows for rapid data entry",
      "Cross-module reporting for users, enrollments, dues, and withdrawals",
    ],

    architecture: [
      {
        label: "Desktop Shell",
        description:
          "Electron-based desktop runtime with isolated IPC communication and secure native integrations.",
      },
      {
        label: "Frontend Layer",
        description:
          "React + TypeScript application with modular feature architecture, centralized state management, and reusable UI systems.",
      },
      {
        label: "Domain Engine",
        description:
          "Dedicated financial logic layer handling installments, dues, fines, extra adjustments, withdrawals, and audit calculations independently from UI.",
      },
      {
        label: "Persistence Layer",
        description:
          "SQL-driven relational data architecture optimized for transactional consistency, financial traceability, and reporting performance.",
      },
    ],

    challenges: [
      "Designing a flexible installment engine capable of handling partial, skipped, extra, and late payments without corrupting financial state",
      "Building explainable financial calculations with audit trails for every automated adjustment",
      "Managing complex enrollment relationships including multiple enrollments and joint participation scenarios",
      "Separating business logic from Electron and UI layers for future web/mobile scalability",
      "Designing high-speed UX workflows for operators handling large daily financial entries",
    ],

    outcomes: [
      "Replaced fragmented manual bookkeeping workflows with centralized digital financial tracking",
      "Improved visibility into user dues, payments, and withdrawal activity across multiple Kametis",
      "Created scalable architecture capable of expanding into web and mobile platforms",
      "Established reusable financial domain modules for future fintech-oriented applications",
    ],

    learnings: [
      "Financial systems should be modeled around immutable events and auditability rather than mutable balances",
      "Desktop applications handling operational workflows require extremely optimized navigation and low-friction data entry",
      "Complex payment systems become maintainable only when domain logic is isolated from UI and storage layers",
      "Explainability of calculations is as important as the calculations themselves in financial products",
    ],
  },
  {
    slug: "aws-event-notification-system",
    title: "Event-Driven Notification & Analytics Platform",
    shortDescription:
      "Distributed serverless event processing platform with fan-out notifications and analytics pipelines.",

    description:
      "Architected a scalable event-driven backend on AWS to process application events asynchronously using EventBridge-based routing, decoupled Lambda consumers, and resilient messaging patterns for notification delivery, analytics ingestion, and audit logging.",

    category: "Cloud Architecture",

    role: "Backend Engineer • Cloud Engineer",

    stack: [
      "AWS Lambda",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon DynamoDB",
      "Node.js",
      "Serverless Framework",
      "CloudWatch",
      "CI/CD",
      "AWS IAM",
      "GitHub Actions",
    ],

    featured: true,

    image: "/images/projects/aws-event.svg",

    accent: "#3d3a36",

    overview:
      "Designed a serverless event-driven platform capable of processing and routing application events to multiple independent consumers with retry handling, dead-letter queues, structured logging, and asynchronous fan-out architecture.",

    problem:
      "Core application services were tightly coupled with notification and analytics workflows, creating reliability bottlenecks, blocking synchronous operations, and increasing operational complexity as event volume scaled.",

    solution:
      "Implemented an event-driven architecture using Amazon EventBridge as the central event bus, Lambda-based consumers for isolated processing, and SQS-backed retry mechanisms with DLQ support to ensure fault-tolerant and scalable event handling.",

    features: [
      "Centralized event bus for decoupled inter-service communication",
      "Multi-consumer fan-out architecture for notifications, analytics, and audit logging",
      "Idempotent event processing to prevent duplicate execution during retries",
      "Dead-letter queue strategy for failed event isolation and replay",
      "Structured logging and monitoring with CloudWatch",
      "Serverless CI/CD pipeline using GitHub Actions and AWS IAM OIDC authentication",
      "Asynchronous event processing with automatic scaling under load",
      "Environment-aware infrastructure deployment using Serverless Framework",
    ],

    architecture: [
      {
        label: "Event Ingestion",
        description:
          "REST APIs publish domain events to Amazon EventBridge through Lambda-based publisher services.",
      },
      {
        label: "Event Routing",
        description:
          "EventBridge rules route events dynamically to independent Lambda consumers based on event type and source patterns.",
      },
      {
        label: "Asynchronous Processing",
        description:
          "Dedicated Lambda consumers process notifications, analytics persistence, and audit logging workflows independently.",
      },
      {
        label: "Failure Handling",
        description:
          "SQS dead-letter queues capture repeatedly failed events for inspection, replay, and operational recovery.",
      },
    ],

    challenges: [
      "Designing idempotent consumers to safely handle duplicate event deliveries",
      "Managing retry behavior and visibility timeouts in asynchronous workflows",
      "Preventing tight coupling between event producers and downstream consumers",
      "Handling Lambda cold starts and execution timeout alignment",
      "Ensuring fault isolation without impacting unrelated consumers",
    ],

    outcomes: [
      "Established a loosely coupled event-driven architecture improving scalability and maintainability",
      "Reduced dependency between core business workflows and notification infrastructure",
      "Enabled independent scaling and deployment of downstream processing services",
      "Improved operational resilience through DLQ-based failure recovery mechanisms",
      "Created reusable serverless infrastructure patterns for future distributed systems",
    ],

    learnings: [
      "Event-driven systems require strong idempotency and retry-awareness by design",
      "Serverless architectures are highly effective for bursty asynchronous workloads",
      "Distributed systems demand explicit failure handling and observability strategies",
      "EventBridge simplifies scalable fan-out architectures compared to tightly coupled service integrations",
      "Infrastructure-as-Code and CI/CD are critical for repeatable cloud deployments",
    ],
  },
  {
    slug: "typolens-chrome-extension",
    title: "TypoLens",
    shortDescription:
      "Chrome extension for seamless, context-aware spelling and grammar enhancements throughout your browsing experience.",
    description:
      "A browser extension that brings real-time, inline writing assistance to any text field, offering discreet error detection and correction suggestions without disrupting your workflow.",
    category: "Browser Extension",
    role: "Software Engineer",
    stack: ["TypeScript", "Chrome APIs", "React"],
    featured: false,
    image: "/images/projects/typolens.svg",
    accent: "#6b8f71",
    overview:
      "TypoLens is a user-friendly writing improvement tool for Chrome, providing instant spelling and grammar feedback directly within web forms, emails, and documents, all through a minimal and intuitive overlay interface.",
    problem:
      "Writers often get interrupted when switching between tools to check their spelling and grammar, leading to lost focus and productivity during online writing tasks.",
    solution:
      "Built an unobtrusive browser extension using content scripts that automatically detects and highlights language errors in real time, letting users see and address issues on the spot with streamlined suggestions.",
    features: [
      "Instant, inline identification of spelling and grammar issues in any web text field",
      "Quick-fix suggestions and single-click corrections",
      "Customizable checking rules and support for excluded domains",
      "Lightweight, intuitive popup for configuration and usage statistics",
    ],
    architecture: [
      {
        label: "Background",
        description:
          "Service worker manages extension state and API interactions.",
      },
      {
        label: "Content",
        description:
          "DOM-scanning scripts identify text, inject highlights, and surface correction tools directly within the browser environment.",
      },
      {
        label: "UI",
        description:
          "React-powered popup interface for managing extension settings and presenting usage insights.",
      },
    ],
    challenges: [
      "Ensuring compatibility across varied and dynamic website structures without interfering with user content",
      "Maintaining performance and responsiveness when processing large or complex web pages",
    ],
    outcomes: [
      "Provided a non-intrusive, always-available writing assistant for web users",
      "Successfully distributed the extension with robust packaging and easy browser installation",
    ],
    learnings: [
      "Reliable writing assistance requires careful DOM handling and a focus on user privacy",
      "Users expect seamless integration and minimal disruption when using writing tools in their browsers",
    ],
  },
  {
    slug: "kharchabook",
    title: "KharchaBook",
    shortDescription:
      "Cashflow and financial operations platform for tracking income, expenses, recurring liabilities, and multi-account financial activity.",

    description:
      "Production-grade finance management platform engineered to handle transaction tracking, recurring obligations, account-level cashflow visibility, and financial analytics with accounting-safe data architecture and scalable relational modeling.",

    category: "FinTech Platform",

    role: "Full Stack Engineer",

    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Supabase Auth",
      "SQL Migrations",
    ],

    featured: true,

    image: "/images/projects/kharchabook.svg",

    accent: "#4f7c82",

    overview:
      "KharchaBook is a financial operations and cashflow tracking platform designed to manage real-world personal finance workflows including multi-account expense tracking, recurring liabilities, SIPs, EMIs, family transfers, and monthly cashflow visibility. The system focuses on operational financial clarity rather than bloated fintech-style features.",

    problem:
      "Traditional expense trackers and spreadsheet-based systems become unreliable as financial activity grows across multiple accounts, recurring obligations, cash transactions, and monthly liabilities. Most existing tools prioritize visual dashboards over accurate financial operations and low-friction transaction management.",

    solution:
      "Built a structured financial ledger platform with normalized accounting-safe architecture, recurring transaction workflows, category analytics, account-level visibility, and scalable transaction aggregation. The system was engineered for long-term maintainability, financial consistency, and rapid daily transaction logging.",

    features: [
      "Multi-account financial tracking across bank accounts and cash wallets",
      "Income, expense, and transfer transaction management",
      "Recurring liability engine for SIPs, EMIs, subscriptions, and bills",
      "Monthly cashflow summaries and spending analytics",
      "Category-level financial insights and trend analysis",
      "Protected financial data using Supabase authentication and RLS",
      "Migration-driven PostgreSQL schema management",
      "Responsive dashboard optimized for rapid transaction entry",
      "Transaction filtering, grouping, and searchable ledger views",
      "Financially consistent transfer workflows between accounts",
    ],

    architecture: [
      {
        label: "Frontend Architecture",
        description:
          "Built using Next.js App Router with modular feature-driven architecture, server components, authenticated route protection, and reusable UI systems using shadcn/ui.",
      },
      {
        label: "Database & Financial Modeling",
        description:
          "PostgreSQL schema designed with normalized financial entities, relational consistency, indexed transaction flows, UUID-based entities, and migration-driven database management.",
      },
      {
        label: "Authentication & Security",
        description:
          "Supabase Auth integrated with row-level security policies to isolate financial data securely at the user level.",
      },
      {
        label: "Recurring Transaction Engine",
        description:
          "Designed recurring financial workflows capable of handling monthly liabilities, future due tracking, and scheduled transaction generation architecture.",
      },
      {
        label: "Analytics Layer",
        description:
          "Aggregation-driven analytics system for category breakdowns, monthly trends, spending analysis, and operational cashflow visibility.",
      },
    ],

    challenges: [
      "Maintaining accounting consistency while supporting account-to-account transfers",
      "Designing recurring transaction systems without creating duplicate financial records",
      "Structuring scalable financial schemas while keeping transaction queries performant",
      "Balancing fast transaction entry UX with strict financial validation rules",
      "Implementing secure row-level financial isolation using Supabase RLS policies",
    ],

    outcomes: [
      "Built a scalable finance operations platform with production-ready relational architecture",
      "Reduced friction for daily financial tracking through optimized transaction workflows",
      "Enabled operational visibility into recurring liabilities and monthly spending behavior",
      "Established a migration-first backend workflow for long-term maintainability",
    ],

    learnings: [
      "Financial systems fail quickly when accounting consistency is treated casually",
      "Transaction speed and operational clarity matter more than feature-heavy dashboards",
      "Recurring financial workflows introduce significant complexity in state management and aggregation logic",
      "Well-designed relational schemas dramatically simplify analytics and reporting layers",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
