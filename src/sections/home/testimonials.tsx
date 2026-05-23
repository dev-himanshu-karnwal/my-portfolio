import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const placeholders = [
  {
    quote:
      "Placeholder for client or collaborator feedback. Replace with a real testimonial when available.",
    author: "Collaborator",
    role: "Product Lead",
  },
  {
    quote:
      "Strong execution on full-stack delivery—clear communication and reliable delivery under scope constraints.",
    author: "Team Lead",
    role: "Engineering Manager",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What collaborators say"
          description="Feedback from teams and stakeholders—update with verified quotes."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {placeholders.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <blockquote className="h-full rounded-xl border border-dashed border-border bg-muted/30 p-8">
                <p className="text-muted-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="text-sm font-medium text-foreground">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
