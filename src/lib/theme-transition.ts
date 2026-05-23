const DURATION_MS = 650;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

function getRevealRadius(x: number, y: number): number {
  const { innerWidth, innerHeight } = window;
  return (
    Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 24
  );
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function supportsViewTransitions(): boolean {
  return typeof document.startViewTransition === "function";
}

/**
 * Reveals the new theme through an expanding circle at `origin`.
 * Uses the View Transitions API so the live page is revealed, not a solid overlay.
 */
export function animateThemeChange(
  theme: "light" | "dark",
  origin: { x: number; y: number },
  applyTheme: () => void,
): void {
  if (prefersReducedMotion() || !supportsViewTransitions()) {
    applyTheme();
    return;
  }

  const { x, y } = origin;
  const radius = getRevealRadius(x, y);
  const root = document.documentElement;

  const transition = document.startViewTransition(() => {
    applyTheme();
  });

  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: DURATION_MS,
          easing: EASING,
          pseudoElement: "::view-transition-new(root)",
        },
      );
    })
    .catch(() => {
      /* Theme already applied in callback */
    });
}
