"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Snap from "lenis/snap";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.08,
  smoothWheel: true,
  anchors: true,
} as const;

const SNAP_OPTIONS = {
  type: "proximity" as const,
  duration: 1.1,
  distanceThreshold: "40%" as const,
  debounce: 120,
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}

function ReducedMotionSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (motion.matches) lenis.stop();
      else lenis.start();
    };

    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, [lenis]);

  return null;
}

function SectionSnap() {
  const pathname = usePathname();
  const lenis = useLenis();
  const snapRef = useRef<Snap | null>(null);

  useEffect(() => {
    if (!lenis || prefersReducedMotion()) return;

    const snap = new Snap(lenis, SNAP_OPTIONS);
    snapRef.current = snap;

    const registerSections = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section")
      );
      if (sections.length > 0) {
        snap.addElements(sections, { align: "start", ignoreSticky: true });
      }
      snap.resize();
    };

    const frame = requestAnimationFrame(registerSections);

    return () => {
      cancelAnimationFrame(frame);
      snap.destroy();
      snapRef.current = null;
    };
  }, [lenis, pathname]);

  return null;
}

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <RouteScrollReset />
      <ReducedMotionSync />
      <SectionSnap />
      {children}
    </ReactLenis>
  );
}
