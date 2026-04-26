export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./radius";
export * from "./shadows";
export * from "./motion";
export * from "./zIndex";
export * from "./iconSize";
export * from "./borderWidth";

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { motion } from "./motion";
import { zIndex } from "./zIndex";
import { iconSize } from "./iconSize";
import { borderWidth } from "./borderWidth";

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  zIndex,
  iconSize,
  borderWidth
} as const;
