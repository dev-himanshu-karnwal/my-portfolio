"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type LineRevealProps = {
  className?: string;
  delay?: number;
};

export function LineReveal({ className, delay = 0 }: LineRevealProps) {
  return (
    <motion.span
      aria-hidden
      className={cn("block h-px origin-left bg-border", className)}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    />
  );
}
