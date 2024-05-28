import {OpportunitiesFilterInput, OpportunityFilters} from "../../../../graphql/graphql.ts";
import {
    levelsDataToMultiSelectInput
} from "../../../../components/filters/uiFilters/base/MultiSelectFilter/utils.tsx";
import {
    MultiSelectFilter
} from "../../../../components/filters/uiFilters/base/MultiSelectFilter/MultiSelectFilter.tsx";
import {Option} from "../../../../components/filters/types.ts";

type RiskFilterProps = {
    filterData: OpportunityFilters['risk'];
    onFilterChange: (where: OpportunitiesFilterInput) => void;
    onApply: any;
}

export const RiskFilter = ({filterData, onFilterChange, onApply}: RiskFilterProps) => {
    const options = levelsDataToMultiSelectInput(filterData);

    const handleSelectedChange = (selected: Option[]) => {
        const where = {
            OR: selected.map(item => {
                return {
                    risk: {
                        EQ: Number(item.value)
                    }
                }
            })
        }
        onFilterChange(where);
    };

    return (
        <MultiSelectFilter label="Risk" options={options} onApply={onApply} onSelectedChange={handleSelectedChange}/>
    )
}