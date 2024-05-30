import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterInputTypes } from "../types.ts";
import { clearURLFromFilter, updateURLWithFilter } from "../../../url/utils.ts";

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

  const handleOnApply = (selected: FilterInputTypes, label: string) => {
    updateURLWithFilter(selected, label);
  };

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
    clearURLFromFilter(label);
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
            onApply={(selected: FilterInputTypes) => {
              handleOnApply(selected, filter.props.label);
            }}
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
