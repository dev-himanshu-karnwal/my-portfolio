import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience of ${profile.name}.`,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience"
        title="Professional experience"
        description="Freelance client work and a year in-house at DCT—delivery, ownership, and cross-functional collaboration."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-12">
          {experiences.map((exp) => (
            <FadeIn key={exp.id}>
              <article className="rounded-2xl border border-border bg-card p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold">{exp.role}</h2>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {exp.company} · {exp.location}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">{exp.summary}</p>

                <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Responsibilities
                </h3>
                <ul className="mt-4 space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Highlights
                </h3>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      → {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </Container>
      </section>
    </>
  );
}
