import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { projects, getProjectBySlug } from "@/data/projects";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="relative border-b border-border pt-28 pb-16 sm:pt-32">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <Container className="relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <FadeIn className="mt-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{project.category}</Badge>
              <Badge variant="outline">{project.role}</Badge>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.shortDescription}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {[
              { title: "Overview", content: project.overview },
              { title: "Problem", content: project.problem },
              { title: "Solution", content: project.solution },
            ].map((section) => (
              <FadeIn key={section.title}>
                <section className="prose-section">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              </FadeIn>
            ))}

            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
                <ul className="mt-6 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Architecture</h2>
                <div className="mt-8">
                  <ArchitectureDiagram items={project.architecture} />
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Challenges</h2>
                <ul className="mt-6 space-y-3">
                  {project.challenges.map((c) => (
                    <li key={c} className="text-muted-foreground leading-relaxed">
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Outcomes</h2>
                <ul className="mt-6 space-y-3">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-foreground">→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Learnings</h2>
                <ul className="mt-6 space-y-3">
                  {project.learnings.map((l) => (
                    <li key={l} className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground leading-relaxed">
                      {l}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <FadeIn>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Tech stack
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </aside>
        </div>

        <FadeIn className="mt-20">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row">
            <div>
              <p className="text-sm text-muted-foreground">Next project</p>
              <p className="mt-1 text-lg font-semibold">{nextProject.title}</p>
            </div>
            <Button asChild>
              <Link href={`/projects/${nextProject.slug}`}>
                View case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Discuss a similar project</Link>
          </Button>
        </FadeIn>
      </Container>
    </>
  );
}
