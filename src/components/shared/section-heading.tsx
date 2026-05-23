"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { LineReveal } from "@/components/motion/line-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <LineReveal className="w-8 bg-secondary/80" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </p>
        </div>
      )}
      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
