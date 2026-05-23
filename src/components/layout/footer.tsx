import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Container } from "@/components/shared/container";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-foreground">{profile.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {profile.positioning}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · TypeScript · Tailwind</p>
        </div>
      </Container>
    </footer>
  );
}
