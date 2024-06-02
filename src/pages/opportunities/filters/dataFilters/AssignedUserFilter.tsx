import { useEffect, useState } from "react";
import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import { SingleSelectFilter } from "../../../../components/filters/uiFilters/base/SingleSelectFilter/SingleSelectFilter.tsx";
import { assignedUserDataToSingleSelectInput } from "../utils.tsx";
import { Option } from "../../../../components/filters/types.ts";
import { defaultURLToSingleSelectInput } from "../../../../components/filters/uiFilters/base/SingleSelectFilter/utils.ts";

type AssignedUserFilterProps = {
  label: string;
  filterData: OpportunityFilters["assignedUser"];
  state?: string;
  onApply: (selected?: Option) => void;
  // @ts-ignore
  onSelectedChange: (where?: OpportunitiesFilterInput["assignedUser"]["email"]) => void;
};

export const AssignedUserFilter = ({
  label,
  filterData,
  state,
  onApply,
  onSelectedChange,
}: AssignedUserFilterProps) => {
  const [selected, setSelected] = useState<Option>();
  const options = assignedUserDataToSingleSelectInput(filterData);

  const handleSelectedChange = (selected?: Option) => {
    const where = {
      EQ: selected?.value,
    };
    onSelectedChange(selected ? where : undefined);
  };

  useEffect(() => {
    setSelected(defaultURLToSingleSelectInput(state));
  }, [state]);

  return (
    <SingleSelectFilter
      label={label}
      options={options}
      selected={selected}
      onApply={onApply}
      onSelectedChange={handleSelectedChange}
    />
  );
};
