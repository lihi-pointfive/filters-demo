import {ResourceFilterInput, ResourceFilters} from "../../../../graphql/graphql.ts";
import {
    MultiSelectFilter
} from "../../../../components/filters/uiFilters/base/MultiSelectFilter/MultiSelectFilter.tsx";
import {
    defaultDataToMultiSelectInput
} from "../../../../components/filters/uiFilters/base/MultiSelectFilter/utils.tsx";
import {Option} from "../../../../components/filters/types.ts";

type ServiceFilterProps = {
    filterData: ResourceFilters['service'];
    onFilterChange: (where: ServiceFilterInput) => void;
    onApply: any;
}

export type ServiceFilterInput = {
    service: ResourceFilterInput['service'];
}

export const ServiceFilter = ({filterData, onFilterChange, onApply}: ServiceFilterProps) => {
    const options = defaultDataToMultiSelectInput(filterData);

    const handleSelectedChange = (selected: Option[]) => {
        const where = {
            service: {
                IN: selected.map(item => item.value)
            }
        }
        onFilterChange(where);
    };

    return (
        <MultiSelectFilter label="Service" options={options} onApply={onApply} onSelectedChange={handleSelectedChange}/>
    )
}