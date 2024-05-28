import { SingleSelectFilter } from "../base/SingleSelectFilter/SingleSelectFilter.tsx";

type DateFilterProps = {
    label: string;
}

export const DateFilter = ({ label }: DateFilterProps) => {
    const options = [
        { value: "Last 7 Days", label: "Last 7 Days" },
        { value: "Last 30 Days", label: "Last 30 Days" },
        { value: "Last Month", label: "Last Month" },
        { value: "This Month", label: "This Month" },
    ]

    return (
        <>
            <SingleSelectFilter label={label} options={options}/>
        </>
    );
}