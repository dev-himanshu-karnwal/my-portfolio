import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Skills",
  description: `${profile.name}'s technical stack across frontend, backend, cloud, and product workflow.`,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="Skills"
        title="Tech stack"
        description="Organized by domain—tools and technologies used to design, build, and ship production systems."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <FadeIn key={category.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border bg-card p-8">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {category.title}
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
