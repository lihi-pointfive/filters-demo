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
  onApply: (selected: Option[]) => void;
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
  onApply,
  onSelectedChange,
  onFilterClear,
}: ServiceFilterProps) => {
  // filter data to ui filter input (options)
  const options = defaultDataToMultiSelectInput(filterData);

  // url selected to ui filter input (selected)

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
      onApply={onApply}
      onSelectedChange={handleSelectedChange}
      onFilterClear={onFilterClear}
    />
  );
};
