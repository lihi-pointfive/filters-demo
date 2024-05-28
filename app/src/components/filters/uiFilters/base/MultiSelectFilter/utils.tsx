import {Option} from "../../../types.ts";
import StarIcon from "@mui/icons-material/Star";
import {Maybe} from "../../../../../graphql/graphql.ts";

export function defaultDataToMultiSelectInput(filtersData: Maybe<string[]> | undefined): Option[] {
    return (filtersData || []).map((item: string) => ({
        value: item,
        label: item
    }));
}

export function levelsDataToMultiSelectInput(filterData: Maybe<number[]> | undefined): Option[] {
    const levels = [
        {
            label: 'High',
            display: (<><StarIcon color="success"/>High</>)
        },
        {
            label: 'Medium',
            display: (<><StarIcon color="primary"/>Medium</>)
        },
        {
            label: 'Low',
            display: (<><StarIcon color="error"/>Low</>)
        }
    ]

    return (filterData || []).map((item: number, index: number) => ({
        value: String(item),
        ...levels[index]
    }));
}