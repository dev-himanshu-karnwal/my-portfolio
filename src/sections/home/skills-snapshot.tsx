import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { skillsSnapshot } from "@/data/skills";

export function SkillsSnapshot() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Skills"
          title="Technical foundation"
          description="Core stack for building and shipping production-grade applications."
        />
        <FadeIn className="mt-10">
          <div className="flex flex-wrap gap-3">
            {skillsSnapshot.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Full tech stack
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
