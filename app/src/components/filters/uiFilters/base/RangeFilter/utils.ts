import { Range } from "./RangeFilter.tsx";
import { MinMax } from "../../../../../graphql/graphql.ts";

export function defaultDataToRangeInput(
  filtersData: MinMax | undefined,
): Range {
  return {
    min: filtersData?.min || 0,
    max: filtersData?.max || 0,
  };
}

export function defaultURLToRangeInput(state?: string): Range | undefined {
  if (state) {
    const minMax = state?.split("-");
    return {
      min: minMax ? Number(minMax[0]) : 0,
      max: minMax ? Number(minMax[1]) : 0
    }
  }

  return undefined;
}