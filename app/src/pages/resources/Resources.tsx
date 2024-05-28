import { Typography } from '@mui/material';
import {ResourcesFiltersPanel} from "./filters/ResourcesFiltersPanel/ResourcesFiltersPanel.tsx";
import {useEffect, useState} from "react";
import {OpportunitiesFilterInput} from "../../graphql/graphql.ts";

const Resources = () => {
    const data = {
        service: [
            "EKS", "EC2"
        ]
    }
    const [whereClause, setWhereClause] = useState<OpportunitiesFilterInput>();

    useEffect(() => {
        console.log(whereClause);
    }, [whereClause])

    return (
        <div className="text-center flex flex-col gap-8">
            <Typography variant="h4">
                Resources Page
            </Typography>
            <ResourcesFiltersPanel filtersData={data} onFilterChange={setWhereClause} />
        </div>
    );
};

export default Resources;
