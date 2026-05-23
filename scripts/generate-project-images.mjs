import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images/projects");
mkdirSync(outDir, { recursive: true });

const projects = [
  { file: "job-portal.svg", title: "Job Portal", accent: "#64748b" },
  { file: "restaurant.svg", title: "Restaurant OS", accent: "#78716c" },
  { file: "crm.svg", title: "CRM Desktop", accent: "#6366f1" },
  { file: "typolens.svg", title: "TypoLens", accent: "#0ea5e9" },
  { file: "aws-events.svg", title: "AWS Events", accent: "#f59e0b" },
  { file: "cashflow.svg", title: "Cashflow", accent: "#10b981" },
  { file: "plantark.svg", title: "PlantArk", accent: "#22c55e" },
  { file: "100x-bot.svg", title: "100x Bot", accent: "#8b5cf6" },
  { file: "oasis-notes.svg", title: "Oasis Notes", accent: "#94a3b8" },
];

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#111113"/>
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#18181b" stroke="#27272a" stroke-width="1"/>
  <rect x="72" y="72" width="200" height="12" rx="6" fill="${p.accent}" opacity="0.6"/>
  <rect x="72" y="100" width="320" height="8" rx="4" fill="#3f3f46"/>
  <rect x="72" y="120" width="280" height="8" rx="4" fill="#27272a"/>
  <rect x="72" y="160" width="656" height="200" rx="12" fill="#09090b" stroke="#27272a"/>
  <rect x="96" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.15"/>
  <rect x="232" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.25"/>
  <rect x="368" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.15"/>
  <text x="72" y="420" fill="#fafafa" font-family="system-ui,sans-serif" font-size="22" font-weight="600">${p.title}</text>
  <text x="72" y="448" fill="#71717a" font-family="system-ui,sans-serif" font-size="14">Case study mockup</text>
</svg>`;
  writeFileSync(join(outDir, p.file), svg);
}

console.log("Generated project mockups in public/images/projects/");
