import {
  ResourceFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import { MultiSelectFilter } from "../../../../components/filters/uiFilters/base/MultiSelectFilter/MultiSelectFilter.tsx";
import { defaultDataToMultiSelectInput } from "../../../../components/filters/uiFilters/base/MultiSelectFilter/utils.tsx";
import { Option } from "../../../../components/filters/types.ts";

type ServiceFilterProps = {
  label: string;
  filterData: ResourceFilters["service"];
  selected?: Option[];
  onSelectedChange: (where?: ServiceFilterInput) => void;
  onFilterClear: () => void;
};

export type ServiceFilterInput = {
  service: ResourceFilterInput["service"];
};

export const ServiceFilter = ({
  label,
  filterData,
  selected,
  onSelectedChange,
  onFilterClear,
}: ServiceFilterProps) => {
  const options = defaultDataToMultiSelectInput(filterData);

  const handleSelectedChange = (selected: Option[]) => {
    const where = {
      service: {
        IN: selected.map((item) => item.value),
      },
    };
    onSelectedChange(where);
  };

  return (
    <MultiSelectFilter
      label={label}
      options={options}
      selected={selected}
      onSelectedChange={handleSelectedChange}
      onFilterClear={onFilterClear}
    />
  );
};
