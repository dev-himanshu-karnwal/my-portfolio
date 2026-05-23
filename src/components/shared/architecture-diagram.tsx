import { FadeIn } from "@/components/motion/fade-in";

type ArchitectureItem = {
  label: string;
  description: string;
};

export function ArchitectureDiagram({ items }: { items: ArchitectureItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" aria-hidden />
      <div className="space-y-4">
        {items.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.08}>
            <div className="relative flex gap-6 sm:gap-8">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card font-mono text-sm text-muted-foreground shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 rounded-xl border border-border bg-card p-5 sm:p-6">
                <h4 className="font-semibold text-foreground">{item.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
