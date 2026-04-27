import { createContext, useContext } from "react";
import type { RadioColor, RadioSize } from "./types";

export interface RadioGroupContextValue {
  name: string;
  selectedValue?: string;
  setValue: (v: string) => void;
  color: RadioColor;
  size: RadioSize;
  disabled: boolean;
  required: boolean;
}

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export function useRadioGroup(): RadioGroupContextValue {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) {
    throw new Error("Radio must be rendered inside a <RadioGroup>.");
  }
  return ctx;
}
