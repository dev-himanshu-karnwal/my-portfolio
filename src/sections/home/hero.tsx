"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { GridBackground } from "@/components/shared/grid-background";
import { LineReveal } from "@/components/motion/line-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { EASE_OUT, transition } from "@/lib/motion";
import { profile } from "@/data/profile";

const pills = [
  "Product execution",
  "Modern engineering",
  "Real-world systems",
  "Ownership mindset",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32">
      <GridBackground />
      <div
        className="ambient-glow ambient-glow-primary -top-32 right-0 h-[420px] w-[420px] opacity-90"
        aria-hidden
      />
      <div
        className="ambient-glow ambient-glow-secondary bottom-0 left-0 h-72 w-72 opacity-70"
        aria-hidden
      />
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.2em] text-secondary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.base, delay: 0.1 }}
            >
              {profile.roles.join(" · ")}
            </motion.p>

            <TextReveal
              as="h1"
              text={profile.headline}
              className="font-display mt-5 max-w-2xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
              delay={0.2}
            />

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.slow, delay: 0.55 }}
            >
              {profile.positioning}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.base, delay: 0.7 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s Work Together
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">Explore My Work</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.85 },
                },
              }}
            >
              {pills.map((item) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE_OUT },
                    },
                  }}
                  className="rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/35 hover:text-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <LineReveal className="mt-14 max-w-xs bg-secondary/70" delay={1} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...transition.slow, delay: 0.35 }}
            className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl shadow-foreground/5"
            >
              <Image
                src="/images/profile.svg"
                alt={profile.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 280px, 320px"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition.base, delay: 0.75 }}
              className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-lg glass"
            >
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-medium">{profile.companyRole}</p>
              <p className="text-xs text-muted-foreground">{profile.company}</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
