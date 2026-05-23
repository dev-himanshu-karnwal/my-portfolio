"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { GridBackground } from "@/components/shared/grid-background";
import { TextReveal } from "@/components/motion/text-reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { EASE_OUT, transition } from "@/lib/motion";
import { profile } from "@/data/profile";
import { metrics } from "@/data/metrics";
import { cn } from "@/lib/utils";

const heroStats = metrics.slice(0, 3);

const socialLinks = [
  { href: profile.links.github, label: "GitHub", icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const firstName = profile.name.split(" ")[0];

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      <GridBackground className="opacity-80" />
      <div
        className="ambient-glow ambient-glow-primary -top-40 right-[-10%] h-[520px] w-[520px] opacity-90"
        aria-hidden
      />
      <div
        className="ambient-glow ambient-glow-secondary -bottom-20 left-[-5%] h-80 w-80 opacity-80"
        aria-hidden
      />
      <div className="noise-overlay absolute inset-0" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7">
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.base, delay: 0.08 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-secondary" aria-hidden />
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-secondary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.base, delay: 0.14 }}
            >
              {profile.roles.join(" · ")}
            </motion.p>

            <div className="mt-4">
              <motion.p
                className="font-display text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition.base, delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="text-foreground">{firstName}</span>
                <span className="text-secondary">.</span>
              </motion.p>

              <TextReveal
                as="h1"
                text={profile.headline}
                className="font-display mt-3 max-w-3xl text-[2.35rem] font-medium leading-[1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                delay={0.28}
                stagger={0.04}
              />
            </div>

            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.slow, delay: 0.58 }}
            >
              {profile.positioning}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.base, delay: 0.72 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Let&apos;s work together
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">Explore my work</Link>
              </Button>
            </motion.div>

            <motion.dl
              className="mt-12 grid grid-cols-3 gap-4 border-y border-border/80 py-8 sm:gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.88 },
                },
              }}
            >
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE_OUT },
                    },
                  }}
                >
                  <dt className="font-display text-2xl font-medium tracking-tight text-secondary sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                    {stat.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transition.base, delay: 1.05 }}
            >
              <span className="text-xs text-muted-foreground">Connect</span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors duration-300 hover:border-secondary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait visual */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition.slow, delay: 0.22 }}
          >
            <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-[420px]">
              {/* Back plate & orbit */}
              <div
                className="absolute -right-3 top-8 hidden h-[88%] w-[72%] rounded-[2rem] border border-secondary/25 bg-secondary/[0.06] sm:block"
                aria-hidden
              />
              <div
                className="absolute -left-4 bottom-16 h-28 w-28 rounded-full border border-dashed border-secondary/30 opacity-70"
                aria-hidden
              />
              <div
                className="absolute right-6 top-4 h-3 w-3 rounded-full bg-secondary/80"
                aria-hidden
              />
              <div
                className="absolute bottom-32 left-0 h-2 w-2 rounded-full bg-primary/40"
                aria-hidden
              />

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-[0_32px_64px_-24px] shadow-foreground/10 ring-1 ring-foreground/[0.04]">
                  <Image
                    src="/images/profile.svg"
                    alt={profile.name}
                    fill
                    className="object-cover object-top scale-[1.02]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <p className="font-display text-2xl font-medium tracking-tight text-foreground">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
                  </div>
                </div>

                {/* Role card */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...transition.base, delay: 0.7 }}
                  className={cn(
                    "absolute -right-2 top-10 max-w-[200px] rounded-xl border border-border glass px-4 py-3.5 shadow-lg sm:-right-6 sm:max-w-none",
                    "lg:-right-8"
                  )}
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-secondary">
                    Currently
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">{profile.companyRole}</p>
                  <p className="text-xs text-muted-foreground">{profile.company}</p>
                </motion.div>

                {/* Projects chip */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...transition.base, delay: 0.82 }}
                  className="absolute -left-2 bottom-24 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-6"
                >
                  <p className="font-display text-3xl font-medium text-secondary">9+</p>
                  <p className="text-xs text-muted-foreground">Production projects shipped</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
