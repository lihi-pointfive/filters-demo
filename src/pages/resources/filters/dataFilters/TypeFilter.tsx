import { useEffect, useState } from "react";
import {
  ResourceFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import { MultiSelectFilter } from "../../../../components/filters/uiFilters/base/MultiSelectFilter/MultiSelectFilter.tsx";
import {
  defaultDataToMultiSelectInput,
  defaultURLToMultiSelectInput,
} from "../../../../components/filters/uiFilters/base/MultiSelectFilter/utils.tsx";
import { Option } from "../../../../components/filters/types.ts";

type TypeFilterProps = {
  label: string;
  filterData: ResourceFilters["resourceType"];
  state?: string;
  onApply: (selected: Option[]) => void;
  onSelectedChange: (where?: ResourceFilterInput["typeName"]) => void;
};

export const TypeFilter = ({
  label,
  filterData,
  state,
  onApply,
  onSelectedChange,
}: TypeFilterProps) => {
  const [selected, setSelected] = useState<Option[]>([]);
  const options = defaultDataToMultiSelectInput(filterData);

  useEffect(() => {
    setSelected(defaultURLToMultiSelectInput(state));
  }, [state]);

  const handleSelectedChange = (selected: Option[]) => {
    const where = {
        IN: selected.map((item) => item.value),
    };
    onSelectedChange(selected.length > 0 ? where : undefined);
  };

  return (
    <MultiSelectFilter
      label={label}
      options={options}
      selected={selected}
      onApply={onApply}
      onSelectedChange={handleSelectedChange}
    />
  );
};
