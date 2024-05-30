import { FiltersPanel } from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import { AssignedUserFilter } from "../dataFilters/AssignedUserFilter.tsx";
import { SavingsFilter } from "../dataFilters/SavingsFilter.tsx";
import { ResourceServiceFilter } from "../dataFilters/ResourceServiceFilter.tsx";

type OpportunitiesFiltersPanel = {
  filtersData: OpportunityFilters;
  onFilterChange: (whereClause: OpportunitiesFilterInput) => void;
};

export const OpportunitiesFiltersPanel = ({
  filtersData,
  onFilterChange,
}: OpportunitiesFiltersPanel) => {
  const filters = [
    {
      component: ResourceServiceFilter,
      props: {
        label: "Service",
        filterData: filtersData.service,
      },
    },
    {
      component: AssignedUserFilter,
      props: {
        label: "Assigned User",
        filterData: filtersData.assignedUser,
      },
    },
    {
      component: SavingsFilter,
      props: {
        label: "Savings",
        filterData: filtersData.savings,
      },
    },
  ];

  return <FiltersPanel filters={filters} onFilterChange={onFilterChange} />;
};
