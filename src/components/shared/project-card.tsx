import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cn("group block", className)}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `linear-gradient(135deg, ${project.accent}40, transparent)` }}
          />
        </div>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.category}</Badge>
            <span className="text-xs text-muted-foreground">{project.role}</span>
          </div>
          <CardTitle className="flex items-start justify-between gap-2 text-xl group-hover:text-foreground/90">
            {project.title}
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </CardTitle>
          <CardDescription className="line-clamp-2 text-base leading-relaxed">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
