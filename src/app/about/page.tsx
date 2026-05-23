import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${profile.name}'s engineering journey, product mindset, and work approach.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Engineering with product clarity"
        description="A story of building real systems—balancing technical depth with the discipline to ship."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
            <FadeIn>
              <div className="relative mx-auto aspect-square max-w-[280px] overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src="/images/profile.jpeg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="prose-section space-y-6">
                <p>{profile.summary}</p>
                <p>
                  Most of my career has been independent work: job portals, restaurant systems,
                  desktop CRMs, cloud pipelines, extensions, and personal tools for clients and teams.
                  I spent 2024–2025 as a Software Engineer at DCT Technology, then returned to
                  freelance—each chapter reinforced the same lesson: understand the problem, design for
                  maintainability, and own delivery end to end.
                </p>
                <p>
                  I work comfortably across frontend, backend, databases, and deployment. Whether
                  freelancing or collaborating in-house, I align on scope and tradeoffs early and
                  prefer shipping iteratively over waiting for perfect plans.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Philosophy</h2>
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.philosophy.map((item) => (
              <StaggerItem key={item}>
                <div className="rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Work style</h2>
          <ul className="mt-8 space-y-4">
            {profile.workStyle.map((item) => (
              <FadeIn key={item}>
                <li className="flex gap-4 text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Skills overview</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <FadeIn key={cat.title}>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {cat.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-sm text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
