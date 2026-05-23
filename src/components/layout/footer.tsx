"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <Container className="py-12">
        <StaggerContainer className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          <StaggerItem className="lg:col-span-2">
            <p className="font-display text-lg font-medium text-foreground">{profile.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {profile.positioning}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline transition-colors duration-300 hover:text-primary"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · TypeScript · Tailwind</p>
        </FadeIn>
      </Container>
    </footer>
  );
}
