import { FiltersPanel } from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import { AssignedUserFilter } from "../dataFilters/AssignedUserFilter.tsx";
import { SavingsFilter } from "../dataFilters/SavingsFilter.tsx";
import { TypeFilter } from "../../../resources/filters/dataFilters/TypeFilter.tsx";
import { ServiceFilter } from "../../../resources/filters/dataFilters/ServiceFilter.tsx";

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
      component: ServiceFilter,
      props: {
        label: "Service",
        path: "resource.service",
        filterData: filtersData.service,
      },
    },
    {
      component: AssignedUserFilter,
      props: {
        label: "Assigned User",
        path: "assignedUser.email",
        filterData: filtersData.assignedUser,
      },
    },
    {
      component: SavingsFilter,
      props: {
        label: "Savings",
        path: "savingAmount",
        filterData: filtersData.savings,
      },
    },
    {
      component: TypeFilter,
      props: {
        label: "Resource Type",
        filterData: filtersData.resourceType,
        path: "resource.typeName",
      },
    },
  ];

  return <FiltersPanel filters={filters} onFilterChange={onFilterChange} />;
};
