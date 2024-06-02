import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { set, unset } from "lodash";
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
  const [queryParams, updateSearchParams] = useURLSearchParams();
  const [where, setWhere] = useState<{ [key: string]: any }>(
      {},
  );

  const handleOnApply = (label: string, selected: FilterInputTypes) => {
    const filterSelected = filterToURL(selected);
    const updatedQueryParams = { ...queryParams };

    if (filterSelected) {
      updatedQueryParams[label] = filterSelected;
    } else {
      delete updatedQueryParams[label];
    }

    updateSearchParams(updatedQueryParams);
  };

  const handleFilterChange = (
    path: string,
    updatedWhereClause?: any,
  ) => {
    setWhere((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (updatedWhereClause) {
        set(updatedFilters, path, updatedWhereClause);
      } else {
        unset(updatedFilters, path);
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    onFilterChange(where);
  }, [where]);

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
              handleFilterChange(
                filter.props.path,
                updatedWhereClause,
              )
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
