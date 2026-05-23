"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const DOT_SPRING = { stiffness: 600, damping: 38, mass: 0.35 };
const RING_SPRING = { stiffness: 220, damping: 26, mass: 0.9 };

const INTERACTIVE =
  "a,button,[role='button'],input,textarea,select,label,[data-cursor],.cursor-pointer";

function useFinePointer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(pointer.matches && !motion.matches);
    update();

    pointer.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      pointer.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function CustomCursor() {
  const enabled = useFinePointer();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [isText, setIsText] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const dotX = useSpring(rawX, DOT_SPRING);
  const dotY = useSpring(rawY, DOT_SPRING);
  const ringX = useSpring(rawX, RING_SPRING);
  const ringY = useSpring(rawY, RING_SPRING);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!el?.closest(INTERACTIVE));
      setIsText(
        !!el?.closest("input, textarea, [contenteditable='true']")
      );
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, rawX, rawY]);

  if (!enabled) return null;

  const ringSize = hovering ? 52 : 36;
  const dotScale = pressing ? 0.65 : hovering ? 0.35 : 1;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[9999] overflow-hidden",
        !visible && "opacity-0"
      )}
    >
      {/* Trailing ring + crosshair */}
      <motion.div
        className="absolute left-0 top-0"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isText ? 2 : ringSize,
            height: isText ? 22 : ringSize,
            opacity: isText ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative flex items-center justify-center"
        >
          {!isText && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border border-secondary/70"
                animate={{
                  scale: pressing ? 0.88 : 1,
                  borderColor: hovering
                    ? "color-mix(in srgb, var(--secondary) 100%, transparent)"
                    : "color-mix(in srgb, var(--secondary) 55%, transparent)",
                }}
                transition={{ duration: 0.25 }}
              />
              <span className="custom-cursor-ring absolute inset-0 rounded-full border border-dashed border-primary/25" />
              <span className="absolute h-px w-3 bg-secondary/50" />
              <span className="absolute h-3 w-px bg-secondary/50" />
              <motion.span
                className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-secondary"
                animate={{ scale: hovering ? 1.35 : 1, opacity: hovering ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-secondary"
                animate={{ scale: hovering ? 1.35 : 1, opacity: hovering ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-secondary"
                animate={{ scale: hovering ? 1.35 : 1, opacity: hovering ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-secondary"
                animate={{ scale: hovering ? 1.35 : 1, opacity: hovering ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
          {isText && (
            <span className="block h-full w-0.5 rounded-full bg-secondary shadow-[0_0_12px_var(--glow-secondary)]" />
          )}
        </motion.div>
      </motion.div>

      {/* Leading dot */}
      <motion.div
        className="absolute left-0 top-0"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.span
          animate={{
            scale: isText ? 0 : dotScale,
            opacity: isText ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "block rounded-full bg-secondary shadow-[0_0_14px_var(--glow-secondary)]",
            hovering ? "h-1.5 w-1.5" : "h-2 w-2"
          )}
        />
        {!isText && !hovering && (
          <span className="custom-cursor-pulse absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30" />
        )}
      </motion.div>
    </div>
  );
}
