"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  stagger?: number;
};

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  stagger = 0.045,
}: TextRevealProps) {
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: EASE_OUT,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00a0" : null}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
