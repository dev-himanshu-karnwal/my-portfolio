import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { metrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Achievements"
          title="Proof of execution"
          description="Consistent practice, production delivery, and breadth across engineering responsibilities."
          align="center"
          className="mx-auto"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="surface-interactive rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-semibold tracking-tight text-secondary">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{metric.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
