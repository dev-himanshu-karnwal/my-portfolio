/** Shared motion tokens — slow, editorial easing */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const transition = {
  fast: { duration: 0.35, ease: EASE_OUT },
  base: { duration: 0.55, ease: EASE_OUT },
  slow: { duration: 0.75, ease: EASE_OUT },
} as const;
