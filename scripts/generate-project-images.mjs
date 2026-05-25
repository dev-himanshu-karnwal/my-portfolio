import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images/projects");
mkdirSync(outDir, { recursive: true });

// Generated placeholder SVGs. PlantArk uses an uploaded JPG.
const projects = [
  { file: "100x-bot.svg", title: "100x.bot", accent: "#6b8f71" },
  { file: "oasis-notes.svg", title: "Oasis Notes", accent: "#3d3a36" },
  {
    file: "blue-collar-platform.svg",
    title: "Blue-Collar Workforce Platform",
    accent: "#3d3a36",
  },
  { file: "rangersfx.svg", title: "Rangers FX", accent: "#D2EFEB" },
  { file: "kameti-ledger.svg", title: "Kameti Ledger", accent: "#3f4a5a" },
  { file: "typolens.svg", title: "TypoLens", accent: "#6b8f71" },
  {
    file: "aws-event.svg",
    title: "Event-Driven Notification & Analytics Platform",
    accent: "#3d3a36",
  },
  { file: "kharchabook.svg", title: "KharchaBook", accent: "#4f7c82" },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapTitle(title, maxLen = 36) {
  if (title.length <= maxLen) return [title];

  const lines = [];
  let current = "";

  for (const word of title.split(" ")) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLen && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function titleMarkup(title) {
  const lines = wrapTitle(title);
  const startY = lines.length > 1 ? 396 : 420;

  return lines
    .map(
      (line, index) =>
        `<text x="72" y="${startY + index * 28}" fill="#fafafa" font-family="system-ui,sans-serif" font-size="22" font-weight="600">${escapeXml(line)}</text>`,
    )
    .join("\n  ");
}

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#161514"/>
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e1d1b" stroke="#322f2c" stroke-width="1"/>
  <rect x="72" y="72" width="200" height="12" rx="6" fill="${p.accent}" opacity="0.6"/>
  <rect x="72" y="100" width="320" height="8" rx="4" fill="#3f3f46"/>
  <rect x="72" y="120" width="280" height="8" rx="4" fill="#27272a"/>
  <rect x="72" y="160" width="656" height="200" rx="12" fill="#09090b" stroke="#27272a"/>
  <rect x="96" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.15"/>
  <rect x="232" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.25"/>
  <rect x="368" y="184" width="120" height="80" rx="8" fill="${p.accent}" opacity="0.15"/>
  ${titleMarkup(p.title)}
  <text x="72" y="448" fill="#71717a" font-family="system-ui,sans-serif" font-size="14">Case study mockup</text>
</svg>`;
  writeFileSync(join(outDir, p.file), svg);
}

console.log("Generated project mockups in public/images/projects/");
