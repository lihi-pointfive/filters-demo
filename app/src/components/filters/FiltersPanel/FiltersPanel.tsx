import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterInputTypes } from "../types.ts";
import { filterToURL } from "../../../url/utils.ts";
import { useURLSearchParams } from "../../../url/hooks.ts";

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
  const [queryParams, updateSearchParams] = useURLSearchParams();

  const handleOnApply = (label: string, selected: FilterInputTypes) => {
    const filterSelected = filterToURL(selected);
    const updatedQueryParams = { ...queryParams };
    const updatedActiveFilters = { ...activeFilters };

    if (filterSelected) {
      updatedQueryParams[label] = filterSelected;
    } else {
      delete updatedQueryParams[label];
    }

    updateSearchParams(updatedQueryParams);
    setActiveFilters(updatedActiveFilters);
  };

  const handleFilterChange = (label: string, updatedWhereClause?: any) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (updatedWhereClause) {
        updatedFilters[label] = updatedWhereClause;
      } else {
        delete updatedFilters[label];
      }

      return updatedFilters;
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
            state={queryParams[filter.props.label]}
            onApply={(selected: FilterInputTypes) => {
              handleOnApply(filter.props.label, selected);
            }}
            onSelectedChange={(updatedWhereClause?: any) =>
              handleFilterChange(filter.props.label, updatedWhereClause)
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
