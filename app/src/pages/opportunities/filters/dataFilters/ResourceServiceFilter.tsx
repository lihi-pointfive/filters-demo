import {
  OpportunitiesFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import {
  ServiceFilter,
  ServiceFilterInput,
} from "../../../resources/filters/dataFilters/ServiceFilter.tsx";
import { Option } from "../../../../components/filters/types.ts";

type ServiceFilterProps = {
  label: string;
  filterData: ResourceFilters["service"];
  selected?: Option[];
  onSelectedChange: (where?: OpportunitiesFilterInput) => void;
  onFilterClear: () => void;
};

export const ResourceServiceFilter = ({
  label,
  filterData,
  selected,
  onSelectedChange,
  onFilterClear,
}: ServiceFilterProps) => {
  const handleFilterChange = (whereClause?: ServiceFilterInput) => {
    const where = {
      resource: whereClause,
    };
    onSelectedChange(where);
  };

  return (
    <ServiceFilter
      label={label}
      filterData={filterData}
      selected={selected}
      onSelectedChange={handleFilterChange}
      onFilterClear={onFilterClear}
      onApply={() => {}}
    />
  );
};
