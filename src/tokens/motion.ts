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

// Spring configurations for motion-library consumers (framer-motion etc).
// Use `crisp` for layout-id moves, `responsive` for hover/scale feedback.
export const motionSpring = {
  crisp:      { type: "spring", stiffness: 500, damping: 30 },
  responsive: { type: "spring", stiffness: 400, damping: 25 },
  gentle:     { type: "spring", stiffness: 220, damping: 26 }
} as const;

export const motion = {
  duration: motionDuration,
  easing:   motionEasing,
  spring:   motionSpring
} as const;

export type MotionDuration = keyof typeof motionDuration;
export type MotionEasing = keyof typeof motionEasing;
export type MotionSpring = keyof typeof motionSpring;
