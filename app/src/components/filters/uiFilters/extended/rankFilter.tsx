import StarIcon from '@mui/icons-material/Star';
import { MultiSelectFilter } from '../base/MultiSelectFilter/MultiSelectFilter.tsx';

type DateFilterProps = {
    label: string;
}

export const RankFilter = ({ label }: DateFilterProps) => {
    const options = [
        { value: "High", label: "High", display: (<><StarIcon color="error" /><span className="pl-1">High</span></>)},
        { value: "Medium", label: "Medium", display: (<><StarIcon color="warning" /><span className="pl-1">Medium</span></>)},
        { value: "Low", label: "Low", display: (<><StarIcon color="success" /><span className="pl-1">Low</span></>) }
    ]

    return (
        <>
            <MultiSelectFilter label={label} options={options}/>
        </>
    );
}