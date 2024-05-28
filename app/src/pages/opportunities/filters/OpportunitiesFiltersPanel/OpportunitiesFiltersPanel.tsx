import {FiltersPanel} from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {OpportunitiesFilterInput, OpportunityFilters} from "../../../../graphql/graphql.ts";
import {RiskFilter} from "../dataFilters/RiskFilter.tsx";
import {AssignedUserFilter} from "../dataFilters/AssignedUserFilter.tsx";
import {SavingsFilter} from "../dataFilters/SavingsFilter.tsx";
import {ResourceServiceFilter} from "../dataFilters/ResourceServiceFilter.tsx";

type OpportunitiesFiltersPanel = {
    filtersData: OpportunityFilters;
    onFilterChange: (whereClause: OpportunitiesFilterInput) => void;
}

export const OpportunitiesFiltersPanel = ({filtersData, onFilterChange}: OpportunitiesFiltersPanel) => {
    const filters = [
        {
            key: 'assignedUser',
            component: AssignedUserFilter,
            props: {
                filterData: filtersData.assignedUser
            }
        },
        {
            key: 'risk',
            component: RiskFilter,
            props: {
                filterData: filtersData.risk
            }
        },
        {
            key: 'savings',
            component: SavingsFilter,
            props: {
                filterData: filtersData.savings
            }
        },
        {
            key: 'resourceService',
            component: ResourceServiceFilter,
            props: {
                filterData: filtersData.service
            }
        }
    ]

    return (
        <FiltersPanel filters={filters} onFilterChange={onFilterChange} whereClause={null} />
    )
}