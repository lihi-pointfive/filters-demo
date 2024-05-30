import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

interface FilterConfig {
  component: React.ComponentType<any>;
  props: any;
}

interface FiltersPanelProps {
  filters: FilterConfig[];
  onFilterChange: (whereClause: any) => void;
}

export const FiltersPanel = ({
  filters,
  onFilterChange,
}: FiltersPanelProps) => {
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: any }>(
    {},
  );

  const handleFilterChange = (updatedWhereClause: any, label: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [label]: updatedWhereClause,
    }));
  };

  const handleFilterClear = (label: string) => {
    setActiveFilters((prevFilters) => {
      const { [label]: _, ...newFilters } = prevFilters;
      return newFilters;
    });
  };

  useEffect(() => {
    onFilterChange({
      AND: Object.values(activeFilters).map((clause) => ({
        ...clause,
      })),
    });
  }, [activeFilters]);

  return (
    <Grid container spacing={2} className="justify-center">
      {filters.map((filter, index) => (
        <Grid item key={index}>
          <filter.component
            {...filter.props}
            onSelectedChange={(updatedWhereClause: any) =>
              handleFilterChange(updatedWhereClause, filter.props.label)
            }
            onFilterClear={() => handleFilterClear(filter.props.label)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
