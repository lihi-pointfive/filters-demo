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

type ServiceFilterProps = {
  label: string;
  filterData: ResourceFilters["service"];
  state?: string;
  onApply: (selected: Option[]) => void;
  onSelectedChange: (where?: ServiceFilterInput) => void;
};

export type ServiceFilterInput = {
  service: ResourceFilterInput["service"];
};

export const ServiceFilter = ({
  label,
  filterData,
  state,
  onApply,
  onSelectedChange,
}: ServiceFilterProps) => {
  const [selected, setSelected] = useState<Option[]>([]);
  const options = defaultDataToMultiSelectInput(filterData);

  useEffect(() => {
    setSelected(defaultURLToMultiSelectInput(state));
  }, [state]);

  const handleSelectedChange = (selected: Option[]) => {
    const where = {
      service: {
        IN: selected.map((item) => item.value),
      },
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
