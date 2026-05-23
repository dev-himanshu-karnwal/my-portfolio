import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Cta() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to build something solid?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Open to full-time roles, contract work, and product-focused engineering collaborations.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/resume">View resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
