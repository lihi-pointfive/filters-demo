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
