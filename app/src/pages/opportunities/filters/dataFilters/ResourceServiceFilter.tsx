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
  state?: string;
  onApply: (selected: Option[]) => void;
  onSelectedChange: (where?: OpportunitiesFilterInput) => void;
};

export const ResourceServiceFilter = ({
  label,
  filterData,
  state,
  onApply,
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
      onApply={onApply}
      onSelectedChange={handleFilterChange}
    />
  );
};
