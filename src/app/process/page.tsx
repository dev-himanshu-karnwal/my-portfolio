import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/data/process";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${profile.name} approaches product execution from planning to deployment.`,
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        title="Workflow & execution"
        description="End-to-end ownership—from understanding the product to shipping and iterating in production."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-start gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted font-mono text-sm text-muted-foreground">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">{step.title}</h2>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="text-foreground">—</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
