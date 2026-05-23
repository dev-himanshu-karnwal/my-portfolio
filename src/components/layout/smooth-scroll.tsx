"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Snap from "lenis/snap";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.12,
  smoothWheel: true,
  anchors: true,
} as const;

const SNAP_OPTIONS = {
  type: "proximity" as const,
  duration: 0.85,
  distanceThreshold: "22%" as const,
  debounce: 250,
};

/** Pause section snap when the footer is on screen so Lenis does not pull back to the last section. */
function shouldPauseSectionSnap(isPaused: boolean) {
  const footer = document.querySelector("footer");
  if (!footer) return false;

  const { top } = footer.getBoundingClientRect();
  const viewport = window.innerHeight;
  const pauseLine = viewport * 0.9;
  const resumeLine = viewport * 1.05;

  return isPaused ? top < resumeLine : top < pauseLine;
}

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

    let snapActive = true;
    let snapPaused = false;
    const syncSnapPause = () => {
      snapPaused = shouldPauseSectionSnap(snapPaused);

      if (snapPaused && snapActive) {
        snap.stop();
        snapActive = false;
      } else if (!snapPaused && !snapActive) {
        snap.start();
        snapActive = true;
      }
    };

    lenis.on("scroll", syncSnapPause);
    window.addEventListener("resize", syncSnapPause);
    syncSnapPause();

    return () => {
      cancelAnimationFrame(frame);
      lenis.off("scroll", syncSnapPause);
      window.removeEventListener("resize", syncSnapPause);
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
