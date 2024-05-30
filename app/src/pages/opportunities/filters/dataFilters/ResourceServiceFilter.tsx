import {
  OpportunitiesFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import {
  ServiceFilter,
  ServiceFilterInput,
} from "../../../resources/filters/dataFilters/ServiceFilter.tsx";

type ServiceFilterProps = {
  label: string;
  filterData: ResourceFilters["service"];
  state?: string;
  onSelectedChange: (where?: OpportunitiesFilterInput) => void;
  onFilterClear: () => void;
};

export const ResourceServiceFilter = ({
  label,
  filterData,
  state,
  onSelectedChange,
}: ServiceFilterProps) => {
  const handleFilterChange = (whereClause?: ServiceFilterInput) => {
    const where = {
      resource: whereClause,
    };
    onSelectedChange(whereClause ? where : undefined);
  };

  return (
    <ServiceFilter
      label={label}
      filterData={filterData}
      state={state}
      onSelectedChange={handleFilterChange}
      onApply={() => {}}
    />
  );
};
