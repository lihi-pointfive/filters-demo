import {
  ResourceFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import { defaultDataToRangeInput } from "../../../../components/filters/uiFilters/base/RangeFilter/utils.ts";
import { RangeFilter } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";
import { Range } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";

type SavingsFilterProps = {
  label: string;
  filterData: ResourceFilters["monthlySaving"];
  onApply: (selected: Range) => void;
  onSelectedChange: (where: ResourceFilterInput) => void;
  onFilterClear: () => void;
};

export const MonthlySavingFilter = ({
  label,
  filterData,
  onApply,
  onSelectedChange,
  onFilterClear,
}: SavingsFilterProps) => {
  const range = defaultDataToRangeInput(filterData);

  const handleSelectedChange = (selected: Range) => {
    const where = {
      monthlySavings: {
        GTE: selected.min,
        LTE: selected.max,
      },
    };
    onSelectedChange(where);
  };

  return (
    <RangeFilter
      label={label}
      range={range}
      onApply={onApply}
      onSelectedChange={handleSelectedChange}
      onFilterClear={onFilterClear}
    />
  );
};
