import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { highlights } from "@/data/highlights";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.title}.`,
};

export default function ResumePage() {
  const topSkills = skillCategories.flatMap((c) => c.skills).slice(0, 24);
  const topProjects = projects.filter((p) => p.featured);

  return (
    <>
      <PageHeader
        label="Resume"
        title={profile.name}
        description={`${profile.roles.join(" · ")}`}
      />
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <FadeIn>
            <div className="mb-10 flex flex-wrap gap-3">
              <Button asChild>
                <a href={profile.links.resume} download>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </FadeIn>

          <article className="resume-content space-y-12 rounded-2xl border border-border bg-card p-8 sm:p-12 print:border-0 print:shadow-none">
            <header className="border-b border-border pb-8">
              <h1 className="text-2xl font-semibold">{profile.name}</h1>
              <p className="mt-1 text-muted-foreground">
                {profile.title} · {profile.location}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {profile.summary}
              </p>
              <p className="mt-4 text-sm">
                <a href={`mailto:${profile.email}`} className="text-foreground hover:underline">
                  {profile.email}
                </a>
                {" · "}
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-foreground hover:underline">
                  {profile.phone}
                </a>
                {" · "}
                <a href={profile.links.linkedin} className="text-foreground hover:underline">
                  LinkedIn
                </a>
                {" · "}
                <a href={profile.links.github} className="text-foreground hover:underline">
                  GitHub
                </a>
              </p>
            </header>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Experience
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="mt-6">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {exp.responsibilities.slice(0, 4).map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Key projects
              </h2>
              <ul className="mt-6 space-y-4">
                {topProjects.map((p) => (
                  <li key={p.slug}>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.shortDescription}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {p.stack.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Skills
              </h2>
              <div className="mt-6 space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-medium text-foreground">{cat.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {cat.skills.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Education
              </h2>
              <ul className="mt-4 space-y-3">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="text-sm font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Additional
              </h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </article>
        </Container>
      </section>
    </>
  );
}
