import type { Metadata } from "next";
import Link from "next/link";
import { Mail, FileText, Briefcase } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for roles, contracts, and collaborations.`,
};

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.github, label: "GitHub", icon: GitHubIcon, external: true },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: profile.links.upwork, label: "Upwork", icon: Briefcase, external: true },
  { href: profile.links.resume, label: "Resume PDF", icon: FileText },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's connect"
        description="Open to freelance projects, contract work, and product-focused collaborations."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
                <h2 className="text-lg font-semibold">Send a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and I&apos;ll respond as soon as possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Direct links
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prefer email? Reach out directly at{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
