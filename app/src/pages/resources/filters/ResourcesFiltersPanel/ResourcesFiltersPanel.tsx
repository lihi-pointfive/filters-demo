import { FiltersPanel } from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {
  ResourceFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import { ServiceFilter } from "../dataFilters/ServiceFilter.tsx";
import { MonthlySavingFilter } from "../dataFilters/MonthlySavingsFilter.tsx";

type ResourcesFiltersPanelProps = {
  filtersData: ResourceFilters;
  filtersState: any;
  onFilterChange: (whereClause: ResourceFilterInput) => void;
};

export const ResourcesFiltersPanel = ({
  filtersData,
  filtersState,
  onFilterChange,
}: ResourcesFiltersPanelProps) => {
  console.log(filtersState);
  const filters = [
    {
      component: ServiceFilter,
      props: {
        label: "Service",
        filterData: filtersData.service,
      },
    },
    {
      component: MonthlySavingFilter,
      props: {
        label: "Monthly Saving",
        filterData: filtersData.monthlySaving,
      },
    },
  ];

  return <FiltersPanel filters={filters} onFilterChange={onFilterChange} />;
};
