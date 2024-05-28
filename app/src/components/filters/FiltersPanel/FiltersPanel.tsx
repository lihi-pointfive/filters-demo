import React from 'react';
import { Grid } from '@mui/material';

interface FilterConfig {
    component: React.ComponentType<any>;
    props: any;
}

interface FiltersPanelProps {
    filters: FilterConfig[];
    whereClause: any;
    onFilterChange: (whereClause: any) => void;
}

export const FiltersPanel = ({ filters, whereClause, onFilterChange }: FiltersPanelProps) => {
    const handleFilterChange = (updatedWhereClause: any) => {
        onFilterChange({
                AND: [{...whereClause, ...updatedWhereClause}]
        })
    };

    return (
        <Grid container spacing={2} className="justify-center">
            {filters.map((filter, index) => (
                <Grid item key={index}>
                    <filter.component {...filter.props} onFilterChange={handleFilterChange} onApply={() => {}}/>
                </Grid>
            ))}
        </Grid>
    );
};
