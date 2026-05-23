import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/experience";

export function ExperienceSnapshot() {
  const current = experiences[0];

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Experience"
          title="Current focus"
          description="Freelance full-stack work—scope, build, and ship for clients and teams."
        />
        <FadeIn className="mt-10">
          <Card className="surface-interactive border-l-[3px] border-l-primary">
            <CardHeader>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {current.period} · {current.location}
              </p>
              <CardTitle className="text-xl">{current.role}</CardTitle>
              <p className="text-muted-foreground">{current.company}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{current.summary}</p>
              <Link
                href="/experience"
                className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                View experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
