// Motion tokens. Use `easingQuiet` per brand spec (calm, no bounce).
// Use `durationFast` (150ms) as the default UI transition.

export const motionDuration = {
  instant: "80ms",
  fast:    "150ms",
  base:    "180ms",
  slow:    "240ms"
} as const;

export const motionEasing = {
  standard:   "cubic-bezier(0.4, 0, 0.2, 1)",
  quiet:      "cubic-bezier(0.2, 0, 0, 1)",
  accelerate: "cubic-bezier(0.4, 0, 1, 1)",
  decelerate: "cubic-bezier(0, 0, 0.2, 1)"
} as const;

export const motion = { duration: motionDuration, easing: motionEasing } as const;

export type MotionDuration = keyof typeof motionDuration;
export type MotionEasing = keyof typeof motionEasing;
