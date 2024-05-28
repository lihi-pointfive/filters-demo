import {OpportunitiesFilterInput, ResourceFilters} from "../../../../graphql/graphql.ts";
import {ServiceFilter, ServiceFilterInput} from "../../../resources/filters/dataFilters/ServiceFilter.tsx";

type ServiceFilterProps = {
    filterData: ResourceFilters['service'];
    onFilterChange: (where: OpportunitiesFilterInput) => void;
    onApply: any;
}

export const ResourceServiceFilter = ({filterData, onFilterChange, onApply}: ServiceFilterProps) => {
    const handleFilterChange = (whereClause: ServiceFilterInput) => {
        const where = {
            resource: whereClause
        }
        onFilterChange(where);
    };

    return (
        <ServiceFilter filterData={filterData} onApply={onApply} onFilterChange={handleFilterChange}/>
    )
}