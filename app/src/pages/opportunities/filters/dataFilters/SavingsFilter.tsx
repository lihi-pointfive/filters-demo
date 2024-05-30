import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import { defaultDataToRangeInput } from "../../../../components/filters/uiFilters/base/RangeFilter/utils.ts";
import { RangeFilter } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";
import { Range } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";

type SavingsFilterProps = {
  label: string;
  filterData: OpportunityFilters["savings"];
  onSelectedChange: (where: OpportunitiesFilterInput) => void;
  onFilterClear: () => void;
};

export const SavingsFilter = ({
  label,
  filterData,
  onSelectedChange,
  onFilterClear,
}: SavingsFilterProps) => {
  const range = defaultDataToRangeInput(filterData);

  const handleSelectedChange = (selected: Range) => {
    const where = {
      savingAmount: {
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
      onSelectedChange={handleSelectedChange}
      onFilterClear={onFilterClear}
    />
  );
};
