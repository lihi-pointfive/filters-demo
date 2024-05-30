import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import {
  defaultDataToRangeInput,
  defaultURLToRangeInput,
} from "../../../../components/filters/uiFilters/base/RangeFilter/utils.ts";
import { RangeFilter } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";
import { Range } from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";
import { useEffect, useState } from "react";

type SavingsFilterProps = {
  label: string;
  filterData: OpportunityFilters["savings"];
  state?: string;
  onApply: (selected?: Range) => void;
  onSelectedChange: (where?: OpportunitiesFilterInput) => void;
};

export const SavingsFilter = ({
  label,
  filterData,
  state,
  onApply,
  onSelectedChange,
}: SavingsFilterProps) => {
  const [selected, setSelected] = useState<Range>();
  const range = defaultDataToRangeInput(filterData);

  const handleSelectedChange = (selected: Range) => {
    const where = {
      savingAmount: {
        GTE: selected?.min,
        LTE: selected?.max,
      },
    };
    onSelectedChange(selected ? where : undefined);
  };

  useEffect(() => {
    setSelected(defaultURLToRangeInput(state));
  }, [state]);

  return (
    <RangeFilter
      label={label}
      range={range}
      selected={selected}
      onApply={onApply}
      onSelectedChange={handleSelectedChange}
    />
  );
};
