import {OpportunityFilters} from "../../../../graphql/graphql.ts";
import {
    SingleSelectFilter
} from "../../../../components/filters/uiFilters/base/SingleSelectFilter/SingleSelectFilter.tsx";
import {assignedUserDataToSingleSelectInput} from "../utils.tsx";

type AssignedUserFilterProps = {
    filterData: OpportunityFilters['assignedUser'];
}

export const AssignedUserFilter = ({filterData}: AssignedUserFilterProps) => {
    const options = assignedUserDataToSingleSelectInput(filterData)
    return (
        <SingleSelectFilter label="Assined User" options={options}/>
    )
}