# Himanshu Karnwal — Portfolio

Premium multi-page developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **UI:** ShadCN-style primitives (Radix + CVA)
- **Icons:** Lucide React
- **Contact:** Nodemailer API route

## Getting started

Requires **Node.js 22** (see `.nvmrc`).

```bash
nvm use 22   # or: nvm install 22 && nvm use 22
npm install
cp .env.example .env.local
# Configure SMTP variables in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (587 or 465) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password / app password |
| `CONTACT_TO_EMAIL` | Recipient for contact form |

## Pages

- `/` — Home
- `/about` — About
- `/projects` — Projects listing
- `/projects/[slug]` — Project case study
- `/skills` — Tech stack
- `/experience` — Experience
- `/process` — Workflow
- `/contact` — Contact form
- `/resume` — Resume

## Customization

- **Profile & content:** `src/data/profile.ts`, `projects.ts`, `experience.ts`, etc.
- **Profile image:** Replace `public/images/profile.jpg`
- **Resume PDF:** Replace `public/resume.pdf`
- **OG image:** Replace `public/og-image.png`

## Deploy on Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

## Node.js

This project uses **Node 22** (`.nvmrc`). Next.js 16 requires Node >= 20.9.0.

```bash
nvm use 22
```
