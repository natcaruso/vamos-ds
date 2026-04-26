import type { ReactNode } from "react";

export interface InputChipProps {
  label: string;
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface FilterChipProps {
  label: string;
  selected?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

export interface DropdownChipOption {
  id: string;
  label: string;
}

export interface DropdownChipProps {
  options: DropdownChipOption[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}
