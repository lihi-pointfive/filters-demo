import { FilterInputTypes, Option } from "../components/filters/types.ts";
import { Range } from "../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";

const isOption = (value: any): value is Option => {
  return (
    (value as Option).label !== undefined &&
    (value as Option).value !== undefined
  );
};

const isRange = (value: any): value is Range => {
  return (
    (value as Range).min !== undefined && (value as Range).max !== undefined
  );
};

export const updateURLWithFilter = (value: FilterInputTypes, label: string) => {
  const params = new URLSearchParams(window.location.search);

  if (isOption(value)) {
    params.set(label, value.label);
  } else if (Array.isArray(value)) {
    const values = value.map((option) => option.label).join(",");
    params.set(label, values);
  } else if (isRange(value)) {
    params.set(label, `${value.min}-${value.max}`);
  }

  window.history.pushState({}, "", `${window.location.pathname}?${params}`);
};

export const clearURLFromFilter = (label: string) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(label);
  window.history.pushState({}, "", `${window.location.pathname}?${params}`);
};
