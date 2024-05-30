import { ReactNode } from "react";

export type Option = {
  value: string;
  label: string;
  display?: ReactNode;
};

export type FilterInputTypes = Option | Option[] | Range;
