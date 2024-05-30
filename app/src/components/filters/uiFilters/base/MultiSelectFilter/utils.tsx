import { Option } from "../../../types.ts";
import { Maybe } from "../../../../../graphql/graphql.ts";

export function defaultDataToMultiSelectInput(
  filtersData: Maybe<string[]> | undefined,
): Option[] {
  return (filtersData || []).map((item: string) => ({
    value: item,
    label: item,
  }));
}
