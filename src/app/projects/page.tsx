import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Case studies and production work by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="Case studies & builds"
        description="Production-oriented work across web, desktop, cloud, extensions, and automation."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
