import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Projects"
            title="Selected work"
            description="Case studies across web, desktop, cloud, and product-focused builds."
          />
          <Link
            href="/projects"
            className="link-underline inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
