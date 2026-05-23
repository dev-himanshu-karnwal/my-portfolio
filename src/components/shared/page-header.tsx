import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeaderProps = {
  label?: string;
  title: string;
  description: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative border-b border-border pb-16 pt-28 sm:pt-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <Container className="relative">
        <FadeIn>
          {label && (
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {label}
            </p>
          )}
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
