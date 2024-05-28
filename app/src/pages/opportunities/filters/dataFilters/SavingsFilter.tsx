import {OpportunityFilters} from "../../../../graphql/graphql.ts";
import {defaultDataToRangeInput} from "../../../../components/filters/uiFilters/base/RangeFilter/utils.ts";
import {RangeFilter} from "../../../../components/filters/uiFilters/base/RangeFilter/RangeFilter.tsx";

type SavingsFilterProps = {
    filterData: OpportunityFilters['savings']
}

export const SavingsFilter = ({filterData}: SavingsFilterProps) => {
    const range = defaultDataToRangeInput(filterData);

    return (
        <RangeFilter label="Savings" range={range}/>
    )
}