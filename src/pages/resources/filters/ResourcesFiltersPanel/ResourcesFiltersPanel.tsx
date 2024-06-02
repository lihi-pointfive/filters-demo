import { FiltersPanel } from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {
  ResourceFilterInput,
  ResourceFilters,
} from "../../../../graphql/graphql.ts";
import { ServiceFilter } from "../dataFilters/ServiceFilter.tsx";
import { MonthlySavingFilter } from "../dataFilters/MonthlySavingsFilter.tsx";
import { TypeFilter } from "../dataFilters/TypeFilter.tsx";

type ResourcesFiltersPanelProps = {
  filtersData: ResourceFilters;
  onFilterChange: (whereClause: ResourceFilterInput) => void;
};

export const ResourcesFiltersPanel = ({
  filtersData,
  onFilterChange,
}: ResourcesFiltersPanelProps) => {
  const filters = [
    {
      component: ServiceFilter,
      props: {
        label: "Service",
        filterData: filtersData.service,
        path: "service",
      },
    },
    {
      component: MonthlySavingFilter,
      props: {
        label: "Monthly Saving",
        filterData: filtersData.monthlySaving,
        path: "monthlySavings",
      },
    },
    {
      component: TypeFilter,
      props: {
        label: "Type",
        filterData: filtersData.resourceType,
        path: "typeName",
      },
    },
  ];

  return <FiltersPanel filters={filters} onFilterChange={onFilterChange} />;
};
