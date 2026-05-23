import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { processSteps } from "@/data/process";

export function EngineeringProcess() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Process"
          title="How I ship"
          description="A structured approach from product understanding through deployment and iteration."
        />
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.slice(0, 3).map((step) => (
            <StaggerItem key={step.step}>
              <div className="surface-interactive h-full rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-xs font-medium text-secondary">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <Link
          href="/process"
          className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
        >
          Full workflow
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
