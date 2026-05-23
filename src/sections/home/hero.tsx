"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { GridBackground } from "@/components/shared/grid-background";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32">
      <GridBackground />
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {profile.roles.join(" · ")}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.positioning}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s Work Together
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">Explore My Work</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Product execution", "Modern engineering", "Real-world systems", "Ownership mindset"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
              <Image
                src="/images/profile.svg"
                alt={profile.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 280px, 320px"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/90 px-4 py-3 shadow-lg glass">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-medium">{profile.companyRole}</p>
              <p className="text-xs text-muted-foreground">{profile.company}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
