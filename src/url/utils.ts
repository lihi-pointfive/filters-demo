import { FilterInputTypes, Option } from "../components/filters/types.ts";
import { Range } from "../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";

export const isOption = (value: any): value is Option => {
  return (
    (value as Option).label !== undefined &&
    (value as Option).value !== undefined
  );
};

export const isRange = (value: any): value is Range => {
  return (
    (value as Range).min !== undefined && (value as Range).max !== undefined
  );
};

export const filterToURL = (value?: FilterInputTypes) => {
  if (value) {
    if (isOption(value)) {
      return value.label;
    } else if (Array.isArray(value)) {
      return value.map((option) => option.label).join(",");
    } else if (isRange(value)) {
      return `${value.min}-${value.max}`;
    }
  }
  return "";
};
