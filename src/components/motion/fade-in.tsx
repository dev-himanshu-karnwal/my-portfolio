"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "up" | "down" | "none";
  blur?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = false,
  ...props
}: FadeInProps) {
  const initialY =
    direction === "up" ? 20 : direction === "down" ? -12 : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: initialY,
        ...(blur ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
