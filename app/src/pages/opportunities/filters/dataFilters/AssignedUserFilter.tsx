import {
  OpportunitiesFilterInput,
  OpportunityFilters,
} from "../../../../graphql/graphql.ts";
import { SingleSelectFilter } from "../../../../components/filters/uiFilters/base/SingleSelectFilter/SingleSelectFilter.tsx";
import { assignedUserDataToSingleSelectInput } from "../utils.tsx";
import { Option } from "../../../../components/filters/types.ts";

type AssignedUserFilterProps = {
  label: string;
  filterData: OpportunityFilters["assignedUser"];
  onSelectedChange: (where: OpportunitiesFilterInput) => void;
  onFilterClear: () => void;
};

export const AssignedUserFilter = ({
  label,
  filterData,
  onSelectedChange,
  onFilterClear,
}: AssignedUserFilterProps) => {
  const options = assignedUserDataToSingleSelectInput(filterData);

  const handleSelectedChange = (selected: Option | null) => {
    const where = {
      assignedUser: {
        email: {
          EQ: selected?.value,
        },
      },
    };
    onSelectedChange(where);
  };

  return (
    <SingleSelectFilter
      label={label}
      options={options}
      onSelectedChange={handleSelectedChange}
      onFilterClear={onFilterClear}
    />
  );
};
