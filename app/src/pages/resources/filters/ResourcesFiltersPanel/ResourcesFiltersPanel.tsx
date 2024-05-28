import {FiltersPanel} from "../../../../components/filters/FiltersPanel/FiltersPanel.tsx";
import {ResourceFilterInput, ResourceFilters} from "../../../../graphql/graphql.ts";
import {ServiceFilter} from "../dataFilters/ServiceFilter.tsx";

type ResourcesFiltersPanelProps = {
    filtersData: ResourceFilters;
    onFilterChange: (whereClause: ResourceFilterInput) => void;
}

export const ResourcesFiltersPanel = ({filtersData, onFilterChange}: ResourcesFiltersPanelProps) => {
    const filters = [
        {
            component: ServiceFilter,
            props: {
                filterData: filtersData.service
            }
        }
    ]

    return (
        <FiltersPanel filters={filters} onFilterChange={onFilterChange} />
    )
}