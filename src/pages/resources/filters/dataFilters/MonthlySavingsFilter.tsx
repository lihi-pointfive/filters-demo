import {
  ResourceFilterInput,
  ResourceFilters,
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
  filterData: ResourceFilters["monthlySaving"];
  state?: string;
  onApply: (selected?: Range) => void;
  onSelectedChange: (where?: ResourceFilterInput["monthlySavings"]) => void;
};

export const MonthlySavingFilter = ({
  label,
  filterData,
  state,
  onApply,
  onSelectedChange,
}: SavingsFilterProps) => {
  const [selected, setSelected] = useState<Range>();
  const range = defaultDataToRangeInput(filterData);

  const handleSelectedChange = (selected?: Range) => {
    const where = {
      GTE: selected?.min,
      LTE: selected?.max,
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
