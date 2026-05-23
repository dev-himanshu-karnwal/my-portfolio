import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const placeholders = [
  {
    quote:
      "Himanshu did a great job with us. He is committed to getting things done and is ready to put in extra efforts. Wishing him all the best!",
    author: "Shardul Lavekar",
    role: "Product Founder @ 100x.bot",
  },
  {
    quote:
      "Delivered high quality work on an urgent project with great communication and strong technical skills. Really appreciate the professionalism, Would love to work together again",
    author: "Paras Kamboj",
    role: "Project Manager @ RapidDine",
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
              <blockquote className="surface-interactive h-full rounded-xl border border-dashed border-border bg-muted/30 p-8">
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
