"use client";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { LineReveal } from "@/components/motion/line-reveal";
import { TextReveal } from "@/components/motion/text-reveal";

type PageHeaderProps = {
  label?: string;
  title: string;
  description: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-28 sm:pt-32">
      <div className="absolute inset-0 grid-bg grid-bg-animated opacity-40" aria-hidden />
      <div
        className="ambient-glow ambient-glow-primary -left-20 top-0 h-64 w-64 opacity-80"
        aria-hidden
      />
      <div
        className="ambient-glow ambient-glow-secondary -right-10 bottom-0 h-48 w-48 opacity-60"
        aria-hidden
      />
      <Container className="relative">
        {label && (
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <LineReveal className="w-8 bg-secondary/80" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </p>
            </div>
          </FadeIn>
        )}
        <TextReveal
          as="h1"
          text={title}
          className="font-display max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          delay={label ? 0.15 : 0.05}
        />
        <FadeIn delay={0.35} className="mt-5 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
