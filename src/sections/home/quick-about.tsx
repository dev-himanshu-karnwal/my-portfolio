import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { profile } from "@/data/profile";

export function QuickAbout() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            label="About"
            title="Execution-focused engineering"
            description="I build digital products with clarity—from understanding the problem to shipping reliable systems in production."
          />
          <FadeIn>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a {profile.companyRole} at {profile.company}, I work across the full stack:
                structured frontends, dependable APIs, and deployments that teams can maintain.
              </p>
              <p>
                My approach balances product thinking with technical depth. I care about what ships,
                how it behaves for users, and whether the codebase stays understandable six months later.
              </p>
              <Link
                href="/about"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                Read my story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
