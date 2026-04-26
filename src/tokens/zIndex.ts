// Z-index scale. Component code consumes the named tier — never raw numbers.

export const zIndex = {
  base:     0,
  raised:   1,
  sticky:   100,
  dropdown: 1000,
  popover:  1100,
  overlay:  1200,
  modal:    1300,
  toast:    1400,
  tooltip:  1500
} as const;

export type ZIndexLayer = keyof typeof zIndex;
